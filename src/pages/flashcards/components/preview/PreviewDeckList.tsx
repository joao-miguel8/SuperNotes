import { DeckType } from "@/types/DeckType";
import DeckPreviewTile from "@/pages/flashcards/components/deck/DeckPreviewTile";

function PreviewDeckList({ decks, currentDeck, selectAndDeselectChosenDeck }: { decks: DeckType[]; currentDeck: DeckType | null; selectAndDeselectChosenDeck: (deckID: string) => void }) {
	return (
		<ul className="mt-4 mx-4 flex flex-col gap-2">
			{decks?.map((deck, index) => {
				return (
					<li key={deck.id}>
						<DeckPreviewTile selectAndDeselectChosenDeck={() => selectAndDeselectChosenDeck(deck.id)} deckPreviewData={deck} chosenDeck={currentDeck} />
					</li>
				);
			})}
		</ul>
	);
}

export default PreviewDeckList;
