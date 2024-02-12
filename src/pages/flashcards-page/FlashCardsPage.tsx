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

					<div className="pb-6 w-80 scrollbar-none overflow-auto overscroll-contain border-[1.6px] border-[#292F33] bg-[#171C1F]">
						{/* header + search bar wrapper */}
						<div className="sticky top-0">
							{/* header section (title + add deck btn) */}
							<div className="p-[1rem] flex items-center justify-between bg-[#171C1F] border-b-[1.6px] border-[#292F33]">
								<button onClick={() => setCurrentDeckIndex(-1)} className={classNames("flex items-center", isDeckSelected && "invisible")}>
									<IoArrowBackOutline size={"1.5rem"} color={"#ADB0B1"} />
								</button>

								<Tooltip arrowSize={8} hasArrow label="Add a new deck" aria-label="Add a new deck">
									<button onClick={() => setShowAddNewDeckModal(true)}>
										<Icon as={RxPencil2} color={"#ADB0B1"} boxSize={6} />
									</button>
								</Tooltip>
							</div>
							{/* Search bar container */}
							<div className="flex items-center bg-[#1A1F23]">
								<Icon as={IoSearch} boxSize={6} className="ml-4" color={"#6B6C70"} />
								<input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search Decks" type="text" className="py-4 px-2 w-full text-white bg-transparent outline-none placeholder:text-[#6B6C70]" />
							</div>
						</div>
						{/* decks list */}
						{isDeckSelected ? (
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
							<h2 className="text-white">test</h2>
							// <ul className="mt-4 mx-4 flex flex-col gap-3">
							// 	{getChosenDeck()?.flashcards?.map((flashcard: FlashCardType) => {
							// <FlashcardPreviewTile />;
							// 	})}
							// </ul>
						)}
					</div>
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlashCardsPage;
