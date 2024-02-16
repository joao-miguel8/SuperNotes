import { DeckType } from "@/types/DeckType";
import DeckPreviewTile from "@/pages/flashcards/components/deck/DeckPreviewTile";

function PreviewDeckList({ decks, currentDeck, selectAndDeselectChosenDeck }: { decks: DeckType[]; currentDeck: DeckType | null; selectAndDeselectChosenDeck: (deckID: string, index: number) => void }) {
	console.log(decks);
	return (
		<ul className="mt-4 mx-4 flex flex-col gap-2">
			{decks?.map((deck, index) => {
				return (
					<li onClick={() => selectAndDeselectChosenDeck(deck.id, index)} key={deck.name}>
						<DeckPreviewTile deckPreviewData={deck} chosenDeck={currentDeck} />
					</li>
				);
			})}
		</ul>
	);
}

export default PreviewDeckList;
