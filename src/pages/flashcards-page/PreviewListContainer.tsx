import { Icon, Tooltip } from "@chakra-ui/react";
import classNames from "classnames";
import { IoArrowBackOutline, IoSearch } from "react-icons/io5";
import { RxPencil2 } from "react-icons/rx";
import DeckPreviewTile from "./DeckPreviewTile";

function PreviewListContainer({ isDeckSelected, decks, currentDeckIndex, searchQuery, setSearchQuery, setCurrentDeckIndex, setShowAddNewDeckModal, selectAndDeselectChosenDeck, querySearchDeckList }) {
	return (
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
	);
}

export default PreviewListContainer;