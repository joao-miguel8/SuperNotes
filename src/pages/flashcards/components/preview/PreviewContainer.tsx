// 3rd party
import { useState } from "react";
import classNames from "classnames";
import { IoArrowBackOutline } from "react-icons/io5";
// hooks
import { useDeckStore } from "../../../../services/zustand/useDeckStore";
import { useCreateFlashcard } from "../flashcard/hooks/useCreateFlashCard";
// types
import type { DeckType } from "../../../../types/DeckType";
// Components
import PreviewSearchBar from "./PreviewSearchBar";
import PreviewAddButton from "./PreviewAddButton";
import PreviewDeckList from "./previewDeckList";
import PreviewFlashCardsList from "./PreviewFlashCardsList";

function PreviewContainer({ isDeckNotSelected, currentDeckIndex, setCurrentDeckIndex, setShowAddNewDeckModal }: { isDeckNotSelected: boolean; currentDeckIndex: number; setCurrentDeckIndex: (index: number) => void; setShowAddNewDeckModal: (triggerModal: boolean) => void }) {
	const [searchQuery, setSearchQuery] = useState("");
	const decks = useDeckStore(state => state.decks);

	const createFlashCard = useCreateFlashcard();

	const querySearchDeckList = decks.filter((deck: DeckType) => deck.name.includes(searchQuery));

	function selectAndDeselectChosenDeck(chosenDeckIndex: number, index: number) {
		if (chosenDeckIndex !== index) {
			setCurrentDeckIndex(index);
		} else if (chosenDeckIndex === index) {
			setCurrentDeckIndex(-1);
		}
	}

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
				{isDeckNotSelected ? <PreviewDeckList decks={querySearchDeckList} currentDeckIndex={currentDeckIndex} selectAndDeselectChosenDeck={selectAndDeselectChosenDeck} /> : <PreviewFlashCardsList chosenDeck={chosenDeck} />}
			</div>
		</>
	);
}

export default PreviewContainer;
