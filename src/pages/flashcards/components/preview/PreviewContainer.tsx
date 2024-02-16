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
	isDeckNotSelected,
	currentDeckIndex,
	setCurrentDeckIndex,
	setShowAddNewDeckModal,
}: {
	currentFlashCardIndex: number;
	setCurrentFlashCardIndex: (index: number) => void;
	isDeckNotSelected: boolean;
	currentDeckIndex: number;
	setCurrentDeckIndex: (index: number) => void;
	setShowAddNewDeckModal: (triggerModal: boolean) => void;
}) {
	const [searchQuery, setSearchQuery] = useState("");
	const decks = useDeckStore(state => state.decks);
	console.log(decks);
	const createFlashCard = useCreateFlashcard();

	const chosenDeck = currentDeckIndex !== -1 ? decks[currentDeckIndex] : null;
	// const chosenFlashCard = currentFlashCardIndex !== -1 ? chosenDeck?.flashcards[currentFlashCardIndex] : null;

	const querySearchDeckList = decks?.filter((deck: DeckType) => deck?.name.includes(searchQuery));

	function selectAndDeselectChosenDeck(chosenDeckIndex: number, index: number) {
		if (chosenDeckIndex !== index) {
			setCurrentDeckIndex(index);
		} else if (chosenDeckIndex === index) {
			setCurrentDeckIndex(-1);
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
						<button onClick={() => setCurrentDeckIndex(-1)} className={classNames("flex items-center", isDeckNotSelected && "invisible")}>
							<IoArrowBackOutline size={"1.5rem"} color={"#ADB0B1"} />
						</button>
						{/* Create Deck btn & Create Flashcard btn */}
						{isDeckNotSelected ? <PreviewAddButton type="Deck" onClick={() => setShowAddNewDeckModal(true)} /> : <PreviewAddButton type="Flashcard" onClick={() => createFlashCard()} />}
					</div>
					{/* Search bar */}
					{isDeckNotSelected ? <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Decks"} /> : <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Flashcard"} />}
				</div>
				{/* decks & flashcards list */}
				{isDeckNotSelected ? (
					<PreviewDeckList decks={querySearchDeckList} currentDeckIndex={currentDeckIndex} selectAndDeselectChosenDeck={selectAndDeselectChosenDeck} />
				) : (
					<PreviewFlashCardsList handleSelectAndDeselectChosenFlashCard={handleSelectAndDeselectChosenFlashCard} currentFlashCardIndex={currentFlashCardIndex} chosenDeck={chosenDeck} />
				)}
			</div>
		</>
	);
}

export default PreviewContainer;
