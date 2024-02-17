import { DeckType } from "@/types/DeckType";
import { FlashCardType } from "@/types/FlashCardType";
import FlashcardPreviewTile from "@/pages/flashcards/components/flashcard/FlashcardPreviewTile";

function PreviewFlashCardsList({ handleSelectAndDeselectChosenFlashCard, currentFlashCard, chosenDeck }: { handleSelectAndDeselectChosenFlashCard: (cardID: string) => void; currentFlashCard: FlashCardType | null; chosenDeck: DeckType | null }) {
	return (
		<ul className="mt-4 mx-4 flex flex-col gap-3">
			{chosenDeck?.flashcards?.map((flashcard: FlashCardType) => (
				<li key={flashcard.id} onClick={() => handleSelectAndDeselectChosenFlashCard(flashcard.id)}>
					<FlashcardPreviewTile currentFlashCard={currentFlashCard} flashcard={flashcard} />
				</li>
			))}
		</ul>
	);
}

export default PreviewFlashCardsList;
