// 3rd party libs
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
// Components
import Header from "@/layouts/Header";
import FlashcardPanel from "@/pages/flashcards/components/flashcard/FlashcardPanel";
import PreviewContainer from "@/pages/flashcards/components/preview/PreviewContainer";
import CreateNewDeckModal from "@/pages/flashcards/components/deck/CreateNewDeckModal";
// hooks
import { useDeckStore } from "@/services/zustand/useDeckStore";
// Types
import type { DeckType } from "@/types/DeckType";
import { FlashCardType } from "@/types/FlashCardType";

function FlashCards() {
	// state
	const [currentDeck, setCurrentDeck] = useState<DeckType | null>();
	const [currentFlashCardIndex, setCurrentFlashCardIndex] = useState(-1);
	const [showAddNewDeckModal, setShowAddNewDeckModal] = useState(false);

	// Store
	const decks = useDeckStore(state => state.decks);
	const updateDeck = useDeckStore(state => state.updateDeck);

	const handleUpdateCurrentDeckTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedDeck = decks.map((deck: DeckType) => {
			if (currentDeck && currentDeck?.id === deck?.id) {
				setCurrentDeck({ ...deck, name: e.target.value });
				return { ...deck, name: e.target.value };
			}
			return deck;
		});
		updateDeck(updatedDeck);
	};

	const chosenFlashcard = currentFlashCardIndex !== -1 ? currentDeck?.flashcards[currentFlashCardIndex] : null;

	const handleUpdateFrontCardVal = (newFrontVal: string) => {
		if (chosenFlashcard) {
			const updateFlashCardFrontVal = { ...chosenFlashcard, front: newFrontVal };
			const updateDeckFrontField = decks.map((deck: DeckType) => {
				if (deck?.id === currentDeck?.id) {
					return { ...deck, flashcards: deck.flashcards?.map((flashcard: FlashCardType) => (flashcard.id === chosenFlashcard.id ? updateFlashCardFrontVal : flashcard)) };
				}
				return deck;
			});
			updateDeck(updateDeckFrontField);
		}
	};

	const handleUpdateBackCardVal = (newBackVal: string) => {
		if (chosenFlashcard) {
			const updateFlashCardBackVal = { ...chosenFlashcard, back: newBackVal };
			const updateDeckFrontField = decks.map((deck: DeckType) => {
				if (deck?.id === currentDeck?.id) {
					return { ...decks, flashcards: deck.flashcards?.map((flashcard: FlashCardType) => (flashcard?.id === chosenFlashcard?.id ? updateFlashCardBackVal : flashcard)) };
				}
				return deck;
			});
			updateDeck(updateDeckFrontField);
		}
	};

	return (
		<div className="h-screen">
			<CreateNewDeckModal showAddNewDeckModal={showAddNewDeckModal} setShowAddNewDeckModal={(bool: boolean) => setShowAddNewDeckModal(bool)} />
			{/* Header | PreviewListContainer | left side container content*/}
			<div className="h-full flex flex-col">
				{/* page header | menu btn */}
				<Header />
				{/* Decks | Flashcard preview list wrapper */}
				<div className="overflow-hidden flex grow">
					{/* scrolling container for deck tiles list */}
					<PreviewContainer currentFlashCardIndex={currentFlashCardIndex} setCurrentFlashCardIndex={setCurrentFlashCardIndex} currentDeck={currentDeck ?? null} setCurrentDeck={setCurrentDeck} setShowAddNewDeckModal={setShowAddNewDeckModal} />
					<div className="overflow-hidden flex-1">
						{/* left-side main-content header */}
						<div className="h-10 sticky top-0 flex justify-center bg-[#1D2327] border-t-[1.6px] border-[#292F33] ">
							{currentDeck && (
								<input
									value={currentDeck?.name}
									onChange={e => handleUpdateCurrentDeckTitle(e)}
									aria-label={`selected board name ${currentDeck?.name} change name input`}
									type="text"
									placeholder="Project name here"
									className="text-12 text-center italic text-[#acadad] focus:outline-dashed outline-[#acadad] bg-transparent"
								/>
							)}
						</div>
						{/* left-side main content container  */}
						<div className="pt-10 h-full overflow-auto bg-[#272e30] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-[#272e30]">
							{decks.length <= 0 && (
								<div className="flex justify-center items-center h-full">
									<button onClick={() => setShowAddNewDeckModal(true)} className="flex items-center gap-2 ">
										<h3 className="align-base italic text-40 text-[#acadad] font-thin">You have no decks</h3>
										<IoIosAddCircleOutline size={"2.4rem"} color="#acadad" />
									</button>
								</div>
							)}
							{!currentDeck && chosenFlashcard && <FlashcardPanel currentFlashCardIndex={currentFlashCardIndex} chosenDeckData={currentDeck ?? null} handleUpdateFrontCardVal={handleUpdateFrontCardVal} handleUpdateBackCardVal={handleUpdateBackCardVal} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlashCards;
