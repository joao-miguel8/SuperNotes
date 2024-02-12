import { IoIosAddCircleOutline } from "react-icons/io";
import { RxPencil2 } from "react-icons/rx";
import { IoArrowBackOutline, IoSearch } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import type { DeckType } from "../../types/DeckType";
import Header from "../../layouts/Header";
import AddNewDeck from "../flashcards-page/AddNewDeck";
import DeckPreviewTile from "../flashcards-page/DeckPreviewTile";
import classNames from "classnames";
import FlashcardPreviewTile from "./FlashcardPreviewTile";
import { FlashCardType } from "../../types/FlashCardType";
import PreviewListContainer from "./PreviewListContainer";

function FlashCardsPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [decks, setDecks] = useState<DeckType[]>([]);
	const [currentDeckIndex, setCurrentDeckIndex] = useState(-1);
	const [showAddNewDeckModal, setShowAddNewDeckModal] = useState(false);

	const querySearchDeckList = decks.filter(deck => deck.name.includes(searchQuery));

	const handleUpdateCurrentDeckTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDecks(prevDecks => prevDecks.map((deck, index) => (index === currentDeckIndex ? { ...deck, name: e.target.value } : deck)));
	};

	function selectAndDeselectChosenDeck(chosenDeckIndex: number, index: number) {
		if (chosenDeckIndex !== index) {
			setCurrentDeckIndex(index);
		} else if (chosenDeckIndex === index) {
			setCurrentDeckIndex(-1);
		}
	}

	const getChosenDeck = () => {
		return decks.find((_, i) => {
			return currentDeckIndex === i;
		});
	};

	const isDeckSelected = currentDeckIndex === -1;

	return (
		<div className="h-screen">
			<AddNewDeck showAddNewDeckModal={showAddNewDeckModal} setShowAddNewDeckModal={(bool: boolean) => setShowAddNewDeckModal(bool)} setDecks={setDecks} />
			<div className="flex flex-col h-full">
				{/* page header | menu btn */}
				<div>
					<Header />
				</div>
				{/* Decks preview list wrapper */}
				<div className="h-full overflow-hidden flex">
					{/* scrolling container for deck tiles list */}
					<PreviewListContainer
						decks={decks}
						isDeckSelected={isDeckSelected}
						currentDeckIndex={currentDeckIndex}
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						setCurrentDeckIndex={setCurrentDeckIndex}
						setShowAddNewDeckModal={setShowAddNewDeckModal}
						selectAndDeselectChosenDeck={selectAndDeselectChosenDeck}
						querySearchDeckList={querySearchDeckList}
					/>
					<div className="w-full">
						{/* left-side main-content header */}
						<div className="py-2 h-10 sticky top-0 flex justify-center bg-[#1D2327] border-t-[1.6px] border-[#292F33]">
							{!isDeckSelected && (
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
						<div className="h-full overflow-auto bg-[#272e30]">
							{decks.length <= 0 && (
								<div className="flex justify-center items-center h-full">
									<button onClick={() => setShowAddNewDeckModal(true)} className="flex items-center gap-2 ">
										<h3 className="align-base italic text-40 text-[#acadad] font-thin">You have no decks</h3>
										<IoIosAddCircleOutline size={"2.4rem"} color="#acadad" />
									</button>
								</div>
							)}
						</div>
						PreviewListContainer
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlashCardsPage;
