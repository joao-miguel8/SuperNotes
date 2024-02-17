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
import { FlashCardType } from "@/types/FlashCardType";

function PreviewContainer({
	chosenFlashcard,
	currentFlashCardID,
	setCurrentFlashCardID,
	currentDeck,
	currentDeckID,
	setCurrentDeckID,
	setShowAddNewDeckModal,
}: {
	chosenFlashcard: FlashCardType | null;
	currentFlashCardID: string | null;
	setCurrentFlashCardID: (cardID: string) => void;
	currentDeck: DeckType | null;
	currentDeckID: string | null;
	setCurrentDeckID: (deckID: string | null) => void;
	setShowAddNewDeckModal: (triggerModal: boolean) => void;
}) {
	// states
	const [searchQuery, setSearchQuery] = useState("");
	// store
	const decks = useDeckStore(state => state.decks);
	const createFlashCard = useCreateFlashcard();

	// const chosenFlashcard = currentFlashCardIndex !== -1 ? currentDeck?.flashcards[currentFlashCardIndex] : null;

	const querySearchDeckList = decks?.filter((deck: DeckType) => deck?.name?.includes(searchQuery));

	function selectAndDeselectChosenDeck(deckID: string) {
		if (currentDeckID !== deckID) {
			setCurrentDeckID(deckID);
		} else if (currentDeckID === deckID) {
			setCurrentDeckID(null);
		}
	}

	function handleSelectAndDeselectChosenFlashCard(cardID: string) {
		if (currentFlashCardID !== cardID) {
			setCurrentFlashCardID(cardID);
		} else if (currentFlashCardID === cardID) {
			setCurrentFlashCardID(null);
		}
	}
	console.log(currentDeck);
	return (
		<>
			<div className="pb-6 w-[20rem] shrink-0 scrollbar-none overflow-auto overscroll-contain border-[1.6px] border-[#292F33] bg-[#171C1F]">
				{/* header + search bar wrapper */}
				<div className="sticky top-0">
					{/* header section (title & go back btn & Create btn) */}
					<div className="p-[1rem] flex items-center justify-between bg-[#171C1F] border-b-[1.6px] border-[#292F33]">
						{/* Go back btn */}
						<button onClick={() => setCurrentDeckID(null)} className={classNames("flex items-center", !currentDeckID && "invisible")}>
							<IoArrowBackOutline size={"1.5rem"} color={"#ADB0B1"} />
						</button>
						{/* Create Deck btn & Create Flashcard btn */}
						{!currentDeckID ? <PreviewAddButton type="Deck" onClick={() => setShowAddNewDeckModal(true)} /> : <PreviewAddButton type="Flashcard" onClick={() => createFlashCard()} />}
					</div>
					{/* Search bar */}
					{!currentDeckID ? <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Decks"} /> : <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Flashcard"} />}
				</div>
				{/* decks & flashcards list */}
				{!currentDeckID ? (
					<PreviewDeckList decks={querySearchDeckList} currentDeck={currentDeck ?? null} selectAndDeselectChosenDeck={selectAndDeselectChosenDeck} />
				) : (
					<PreviewFlashCardsList handleSelectAndDeselectChosenFlashCard={handleSelectAndDeselectChosenFlashCard} currentFlashCard={chosenFlashcard} chosenDeck={currentDeck} />
				)}
			</div>
		</>
	);
}

export default PreviewContainer;
