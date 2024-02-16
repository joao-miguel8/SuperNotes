// 3rd party
import { useState } from "react";
import classNames from "classnames";
import { IoArrowBackOutline } from "react-icons/io5";
// hooks
import { useDeckStore } from "@/services/zustand/useDeckStore";
import { useCreateFlashcard } from "@/pages/flashcards/components/flashcard/hooks/useCreateFlashCard";
// types
import type { DeckType } from "@/types/DeckType";
// Components
import PreviewSearchBar from "@/pages/flashcards/components/preview/PreviewSearchBar";
import PreviewAddButton from "@/pages/flashcards/components/preview/PreviewAddButton";
import PreviewDeckList from "@/pages/flashcards/components/preview/PreviewDeckList";
import PreviewFlashCardsList from "@/pages/flashcards/components/preview/PreviewFlashCardsList";

function PreviewContainer({
	currentFlashCardIndex,
	setCurrentFlashCardIndex,
	currentDeck,
	setCurrentDeck,
	setShowAddNewDeckModal,
}: {
	currentFlashCardIndex: number;
	setCurrentFlashCardIndex: (index: number) => void;
	currentDeck: DeckType | null;
	setCurrentDeck: (deck: DeckType | null) => void;
	setShowAddNewDeckModal: (triggerModal: boolean) => void;
}) {
	// states
	const [searchQuery, setSearchQuery] = useState("");
	// store
	const decks = useDeckStore(state => state.decks);
	const createFlashCard = useCreateFlashcard();

	const chosenFlashcard = currentFlashCardIndex !== -1 ? currentDeck?.flashcards[currentFlashCardIndex] : null;

	const querySearchDeckList = decks?.filter((deck: DeckType) => deck?.name?.includes(searchQuery));

	function selectAndDeselectChosenDeck(deckID: string, index: number) {
		if (currentDeck?.id !== deckID) {
			setCurrentDeck(decks[index]);
		} else if (currentDeck?.id !== deckID) {
			setCurrentDeck(null);
		}
	}
	function handleSelectAndDeselectChosenFlashCard(chosenFlashCardIndex: number, index: number) {
		if (chosenFlashCardIndex !== index) {
			setCurrentFlashCardIndex(index);
		} else if (chosenFlashCardIndex === index) {
			setCurrentFlashCardIndex(-1);
		}
	}

	return (
		<>
			<div className="pb-6 w-[20rem] shrink-0 scrollbar-none overflow-auto overscroll-contain border-[1.6px] border-[#292F33] bg-[#171C1F]">
				{/* header + search bar wrapper */}
				<div className="sticky top-0">
					{/* header section (title & go back btn & Create btn) */}
					<div className="p-[1rem] flex items-center justify-between bg-[#171C1F] border-b-[1.6px] border-[#292F33]">
						{/* Go back btn */}
						<button onClick={() => setCurrentDeck(null)} className={classNames("flex items-center", !currentDeck && "invisible")}>
							<IoArrowBackOutline size={"1.5rem"} color={"#ADB0B1"} />
						</button>
						{/* Create Deck btn & Create Flashcard btn */}
						{!currentDeck ? <PreviewAddButton type="Deck" onClick={() => setShowAddNewDeckModal(true)} /> : <PreviewAddButton type="Flashcard" onClick={() => createFlashCard()} />}
					</div>
					{/* Search bar */}
					{!currentDeck ? <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Decks"} /> : <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Flashcard"} />}
				</div>
				{/* decks & flashcards list */}
				{!currentDeck ? (
					<PreviewDeckList decks={querySearchDeckList} currentDeck={currentDeck ?? null} selectAndDeselectChosenDeck={selectAndDeselectChosenDeck} />
				) : (
					<PreviewFlashCardsList handleSelectAndDeselectChosenFlashCard={handleSelectAndDeselectChosenFlashCard} currentFlashCardIndex={currentFlashCardIndex} chosenDeck={currentDeck} />
				)}
			</div>
		</>
	);
}

export default PreviewContainer;
