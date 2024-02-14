// 3rd party
import { useState } from "react";
import classNames from "classnames";
import { IoArrowBackOutline } from "react-icons/io5";
// hooks
import { useDeckStore } from "../../services/zustand/useDeckStore";
import { useCreateFlashcard } from "../flashcard/hooks/useCreateFlashCard";
// types
import type { DeckType } from "../../types/DeckType";
import type { FlashCardType } from "../../types/FlashCardType";
import FlashcardPreviewTile from "../flashcard/FlashcardPreviewTile";
// Components
import DeckPreviewTile from "../deck/DeckPreviewTile";
import PreviewSearchBar from "./PreviewSearchBar";
import PreviewAddButton from "./PreviewAddButton";
import PreviewDeckList from "./previewDeckList";

function PreviewListContainer({
	isDeckNotSelected,
	currentDeckIndex,
	setCurrentDeckIndex,
	setShowAddNewDeckModal,
	selectAndDeselectChosenDeck,
}: {
	isDeckNotSelected: boolean;
	currentDeckIndex: number;
	setCurrentDeckIndex: (index: number) => void;
	setShowAddNewDeckModal: (triggerModal: boolean) => void;
	selectAndDeselectChosenDeck: (currentDeckIndex: number, index: number) => void;
}) {
	const [searchQuery, setSearchQuery] = useState("");
	const decks = useDeckStore(state => state.decks);

	const createFlashCard = useCreateFlashcard();

	const querySearchDeckList = decks.filter((deck: DeckType) => deck.name.includes(searchQuery));

	const chosenDeck = currentDeckIndex !== -1 ? decks[currentDeckIndex] : null;

	return (
		<>
			<div className="pb-6 w-[20rem] shrink-0 scrollbar-none overflow-auto overscroll-contain border-[1.6px] border-[#292F33] bg-[#171C1F]">
				{/* header + search bar wrapper */}
				<div className="sticky top-0">
					{/* header section (title + add deck btn) */}
					<div className="p-[1rem] flex items-center justify-between bg-[#171C1F] border-b-[1.6px] border-[#292F33]">
						<button onClick={() => setCurrentDeckIndex(-1)} className={classNames("flex items-center", isDeckNotSelected && "invisible")}>
							<IoArrowBackOutline size={"1.5rem"} color={"#ADB0B1"} />
						</button>

						{isDeckNotSelected ? <PreviewAddButton type="Deck" onClick={() => setShowAddNewDeckModal(true)} /> : <PreviewAddButton type="Flashcard" onClick={() => createFlashCard()} />}
					</div>
					{/* Search bar container */}
					{isDeckNotSelected ? <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Decks"} /> : <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Flashcard"} />}
				</div>
				{/* decks list */}
				{isDeckNotSelected ? (
					<PreviewDeckList decks={querySearchDeckList} currentDeckIndex={currentDeckIndex} selectAndDeselectChosenDeck={selectAndDeselectChosenDeck} />
				) : (
					<ul className="mt-4 mx-4 flex flex-col gap-3">
						{chosenDeck?.flashcards?.map((flashcard: FlashCardType) => (
							<FlashcardPreviewTile flashCardData={flashcard} />
						))}
					</ul>
				)}
			</div>
		</>
	);
}

export default PreviewListContainer;
