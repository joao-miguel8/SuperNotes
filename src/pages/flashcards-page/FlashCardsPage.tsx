import { RxPencil2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import type { DeckType } from "../../types/DeckType";
import Header from "../../layouts/Header";
import AddNewDeck from "../flashcards-page/AddNewDeck";
import DeckPreviewTile from "../flashcards-page/DeckPreviewTile";

function FlashCardsPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [decks, setDecks] = useState<DeckType[]>([]);
	const [currentDeckIndex, setCurrentDeckIndex] = useState(-1);
	const [showAddNewDeckModal, setShowAddNewDeckModal] = useState(false);

	const querySearchDeckList = decks.filter(deck => deck.name.includes(searchQuery));

	const handleUpdateCurrentDeckTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDecks(prevDecks => prevDecks.map((deck, index) => (index === currentDeckIndex ? { ...deck, name: e.target.value } : deck)));
	};
	console.log(decks);
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
							{/* header section (title + add Note btn) */}
							<div className="p-[1rem] flex items-center justify-end bg-[#171C1F] border-b-[1.6px] border-[#292F33]">
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
						<ul className="mt-4 mx-4 flex flex-col gap-2">
							{querySearchDeckList.map((deck, i) => {
								return (
									<li onClick={() => setCurrentDeckIndex(i)} key={deck.name}>
										<DeckPreviewTile deckPreviewData={deck} currentDeckIndex={currentDeckIndex} decks={decks} />
									</li>
								);
							})}
						</ul>
					</div>
					<div className="w-full">
						{/* left-side main-content header */}
						<div className="py-2 h-10 sticky top-0 flex justify-center bg-[#1D2327] border-t-[1.6px] border-[#292F33]">
							{currentDeckIndex !== -1 && (
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
						{/* </div> */}
						{/* left-side main content container  */}
						<div className="h-full overflow-auto"></div>
						{/* left-side main-content */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlashCardsPage;
