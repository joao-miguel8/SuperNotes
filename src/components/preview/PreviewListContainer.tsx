import { useState } from "react";
import { Icon, Tooltip } from "@chakra-ui/react";
import classNames from "classnames";
import { IoArrowBackOutline, IoSearch } from "react-icons/io5";
import { RxPencil2 } from "react-icons/rx";
import DeckPreviewTile from "../deck/DeckPreviewTile";
import type { DeckType } from "../../types/DeckType";
import type { FlashCardType } from "../../types/FlashCardType";
import { useDeckStore } from "../../services/zustand/useDeckStore";
import FlashcardPreviewTile from "../flashcard/FlashcardPreviewTile";
import { createFlashcard } from "../flashcard/utils/createFlashCard";
import PreviewSearchBar from "./PreviewSearchBar";

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

	const createNewFlashCard = useDeckStore(state => state.createFlashCard);

	const handleCreateNewFlashCard = () => {
		const initialFlashCardData = createFlashcard();
		createNewFlashCard(initialFlashCardData);
	};

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

						{isDeckNotSelected ? (
							<Tooltip arrowSize={8} hasArrow label="Add a new deck" aria-label="Add a new deck">
								<button onClick={() => setShowAddNewDeckModal(true)}>
									<Icon as={RxPencil2} color={"#ADB0B1"} boxSize={6} />
								</button>
							</Tooltip>
						) : (
							<Tooltip arrowSize={8} hasArrow label="Add a new flashcard" aria-label="Add a new flashcard">
								<button onClick={() => handleCreateNewFlashCard()}>
									<Icon as={RxPencil2} color={"#ADB0B1"} boxSize={6} />
								</button>
							</Tooltip>
						)}
					</div>
					{/* Search bar container */}
					{isDeckNotSelected ? <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Decks"} /> : <PreviewSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeHolder={"Search for Flashcard"} />}
				</div>
				{/* decks list */}
				{isDeckNotSelected ? (
					<ul className="mt-4 mx-4 flex flex-col gap-2">
						{querySearchDeckList.map((deck, index) => {
							return (
								<li onClick={() => selectAndDeselectChosenDeck(currentDeckIndex, index)} key={deck.name}>
									<DeckPreviewTile deckPreviewData={deck} currentDeckIndex={currentDeckIndex} decks={decks} />
								</li>
							);
						})}
					</ul>
				) : (
					<ul className="mt-4 mx-4 flex flex-col gap-3">
						{chosenDeck?.flashcards?.map((flashcard: FlashCardType) => {
							return <FlashcardPreviewTile flashCardData={flashcard} />;
						})}
					</ul>
				)}
			</div>
		</>
	);
}

export default PreviewListContainer;
