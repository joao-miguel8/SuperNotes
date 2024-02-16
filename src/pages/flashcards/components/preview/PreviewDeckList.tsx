import { DeckType } from "@/types/DeckType";
import DeckPreviewTile from "@/pages/flashcards/components/deck/DeckPreviewTile";

function PreviewDeckList({ decks, currentDeck, selectAndDeselectChosenDeck }: { decks: DeckType[]; currentDeck: DeckType | null; selectAndDeselectChosenDeck: (deckID: string) => void }) {
	console.log(decks);
	return (
		<ul className="mt-4 mx-4 flex flex-col gap-2">
			{decks?.map((deck, index) => {
				return (
					<li onClick={() => selectAndDeselectChosenDeck(deck.id)} key={deck.id}>
						<DeckPreviewTile deckPreviewData={deck} chosenDeck={currentDeck} />
					</li>
				);
			})}
		</ul>
	);
}

export default PreviewDeckList;
