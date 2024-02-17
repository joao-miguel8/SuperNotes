// 3rd party libs
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
// Components
import Header from "@/layouts/Header";
import PreviewContainer from "@/pages/flashcards/components/preview/PreviewContainer";
import CreateNewDeckModal from "@/pages/flashcards/components/deck/CreateNewDeckModal";
import EditFlashcardPanel from "@/pages/flashcards/components/flashcard/EditFlashcardPanel";
// hooks
import { useDeckStore } from "@/services/zustand/useDeckStore";
// Types
import type { DeckType } from "@/types/DeckType";
import type { FlashCardType } from "@/types/FlashCardType";

function FlashCards() {
	// state
	const [currentDeckID, setCurrentDeckID] = useState<string | null>(null);
	const [currentFlashCardID, setCurrentFlashCardID] = useState<string | null>(null);
	const [showAddNewDeckModal, setShowAddNewDeckModal] = useState(false);

	// Store
	const decks = useDeckStore(state => state.decks);
	const updateDeck = useDeckStore(state => state.updateDeck);

	const chosenDeck = decks?.find(deck => (deck?.id === currentDeckID ? deck : null));

	const chosenFlashcard = chosenDeck?.flashcards?.find(card => (card?.id === currentFlashCardID ? card : null));

	const handleUpdateCurrentDeckTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const updatedDeck = decks.map((deck: DeckType) => {
			if (currentDeckID && currentDeckID === deck?.id) return { ...chosenDeck, name: e.target.value };
		});
		updateDeck(updatedDeck);
	};

	const handleUpdateFrontCardVal = (newFrontVal: string) => {
		const updateDeckFrontValField = decks.map((deck: DeckType) => {
			return {
				...deck,
				flashcards: deck.flashcards?.map((flashcard: FlashCardType) => {
					return flashcard?.id === currentFlashCardID ? { ...chosenFlashcard, front: newFrontVal } : flashcard;
				}),
			};
		});
		updateDeck(updateDeckFrontValField);
	};

	const handleUpdateBackCardVal = (newFrontVal: string) => {
		const updateDeckFrontValField = decks.map((deck: DeckType) => {
			return {
				...deck,
				flashcards: deck.flashcards?.map((flashcard: FlashCardType) => {
					return flashcard?.id === currentFlashCardID ? { ...chosenFlashcard, back: newFrontVal } : flashcard;
				}),
			};
		});
		updateDeck(updateDeckFrontValField);
	};
	console.log(chosenFlashcard);
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
					<PreviewContainer
						chosenFlashcard={chosenFlashcard ?? null}
						currentFlashCardID={currentFlashCardID ?? null}
						setCurrentFlashCardID={setCurrentFlashCardID}
						currentDeck={chosenDeck}
						currentDeckID={currentDeckID ?? null}
						setCurrentDeckID={setCurrentDeckID}
						setShowAddNewDeckModal={setShowAddNewDeckModal}
					/>
					<div className="overflow-hidden flex-1">
						{/* left-side main-content header */}
						<div className="h-10 sticky top-0 flex justify-center bg-[#1D2327] border-t-[1.6px] border-[#292F33] ">
							{chosenDeck && (
								<input
									value={chosenDeck?.name}
									onChange={e => handleUpdateCurrentDeckTitle(e)}
									aria-label={`selected board name ${chosenDeck?.name} change name input`}
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
							{chosenDeck && chosenFlashcard && <EditFlashcardPanel currentFlashCard={chosenFlashcard} chosenDeckData={chosenDeck ?? null} handleUpdateFrontCardVal={handleUpdateFrontCardVal} handleUpdateBackCardVal={handleUpdateBackCardVal} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlashCards;
