import { DeckType } from "../../../../types/DeckType";
import DeckPreviewTile from "../deck/DeckPreviewTile";

function PreviewDeckList({ decks, currentDeckIndex, selectAndDeselectChosenDeck }: { decks: DeckType[]; currentDeckIndex: number; selectAndDeselectChosenDeck: (chosenIndex: number, index: number) => void }) {
	return (
		<ul className="mt-4 mx-4 flex flex-col gap-2">
			{decks?.map((deck, index) => {
				return (
					<li onClick={() => selectAndDeselectChosenDeck(currentDeckIndex, index)} key={deck.name}>
						<DeckPreviewTile deckPreviewData={deck} currentDeckIndex={currentDeckIndex} decks={decks} />
					</li>
				);
			})}
		</ul>
	);
}

export default PreviewDeckList;
