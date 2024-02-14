import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import type { DeckType } from "../types/DeckType";
import Header from "../layouts/Header";
import { useDeckStore } from "../services/zustand/useDeckStore";
import FlashcardPanel from "../components/flashcard/FlashcardPanel";
import PreviewContainer from "../components/preview/PreviewContainer";
import CreateNewDeckModal from "../components/deck/CreateNewDeckModal";

function FlashCards() {
	// state
	const [currentDeckIndex, setCurrentDeckIndex] = useState(-1);
	const [showAddNewDeckModal, setShowAddNewDeckModal] = useState(false);

	// Store
	const decks = useDeckStore(state => state.decks);
	const updateDeck = useDeckStore(state => state.updateDeck);

	const handleUpdateCurrentDeckTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateDeck((state: any) => ({
			decks: state.decks.map((deck: DeckType, index: Number) => {
				if (index === currentDeckIndex) {
					return { ...deck, name: e.target.value };
				}
				return deck;
			}),
		}));
	};

	const isDeckNotSelected = currentDeckIndex === -1;
	const chosenDeck = currentDeckIndex !== -1 ? decks[currentDeckIndex] : null;

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
					<PreviewContainer isDeckNotSelected={isDeckNotSelected} currentDeckIndex={currentDeckIndex} setCurrentDeckIndex={setCurrentDeckIndex} setShowAddNewDeckModal={setShowAddNewDeckModal} />
					<div className="overflow-hidden flex-1">
						{/* left-side main-content header */}
						<div className="h-10 sticky top-0 flex justify-center bg-[#1D2327] border-t-[1.6px] border-[#292F33] ">
							{!isDeckNotSelected && (
								<input
									value={decks[currentDeckIndex]?.name}
									onChange={e => handleUpdateCurrentDeckTitle(e)}
									aria-label={`selected board name ${decks[currentDeckIndex]?.name} change name input`}
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
							{!isDeckNotSelected && <FlashcardPanel chosenDeckData={chosenDeck} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlashCards;
