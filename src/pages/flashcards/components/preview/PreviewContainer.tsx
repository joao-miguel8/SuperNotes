// 3rd party
import { useState } from "react";
import classNames from "classnames";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

// hooks
import { useDisclosure } from "@chakra-ui/react";
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
import DeleteDeckModal from "../deck/DeleteDeckModal";

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
	const [selectedDecksToDelete, setSelectedDecksToDelete] = useState<DeckType[]>([]);
	const { isOpen: isDeleteDeckModalActive, onOpen: EnableDeleteDeckModal, onClose: disableDeleteDeckModal } = useDisclosure();

	// store
	const decks = useDeckStore(state => state.decks);
	const createFlashCard = useCreateFlashcard();

	const querySearchDeckList = decks?.filter((deck: DeckType) => deck?.name?.includes(searchQuery));
	const queryFlashCardsList = currentDeck?.flashcards?.filter((flashcard: FlashCardType) => flashcard?.front?.includes(searchQuery));

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

	const handleDeleteSelectedDecks = (e: Event, deck: DeckType) => {
		setSelectedDecksToDelete((prevDecks: DeckType[]) => {
			if (e.target.checked) {
				return [...prevDecks, deck];
			} else {
				// Remove deck from arr
				return prevDecks.filter(flashCardDeck => flashCardDeck !== deck);
			}
		});
	};

	console.log(selectedDecksToDelete);

	return (
		<>
			<div className="pb-6 w-[20rem] shrink-0 border-[1.6px] border-[#292F33] bg-[#171C1F]">
				{/* header + search bar wrapper */}
				<DeleteDeckModal isDeleteDeckModalActive={isDeleteDeckModalActive} EnableDeleteDeckModal={EnableDeleteDeckModal} disableDeleteDeckModal={disableDeleteDeckModal} />
				<div className="sticky top-0">
					{/* container title */}
					{!currentDeckID ? <h5 className="mt-4 text-center text-20 font-semibold text-white">Decks</h5> : <h5 className="mt-4 text-center text-20 font-semibold text-white">FlashCards</h5>}
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
					{/* delete selected decks */}
					<div className="mx-2 p-4 flex items-center border-y border-[#292F33] ">
						<button onClick={() => EnableDeleteDeckModal()} disabled={selectedDecksToDelete.length <= 0} className={classNames("flex items-center gap-2", selectedDecksToDelete.length <= 0 && "cursor-not-allowed")}>
							<FaTrashAlt size={"1.4rem"} className={classNames("duration-300", selectedDecksToDelete.length > 0 ? "fill-white hover:fill-red-400" : "fill-white opacity-25 disable")} />
						</button>
						{/* </div> */}
					</div>
					D
				</div>
				{/* decks & flashcards list */}
				<div className="pt-4 pb-40 h-full overflow-y-auto overscroll-contain scrollbar-none">
					{!currentDeckID ? (
						<PreviewDeckList decks={querySearchDeckList} currentDeck={currentDeck ?? null} selectAndDeselectChosenDeck={selectAndDeselectChosenDeck} handleDeleteSelectedDecks={handleDeleteSelectedDecks} />
					) : (
						<PreviewFlashCardsList handleSelectAndDeselectChosenFlashCard={handleSelectAndDeselectChosenFlashCard} currentFlashCard={chosenFlashcard} chosenDeck={queryFlashCardsList} />
					)}
				</div>
			</div>
		</>
	);
}

export default PreviewContainer;
