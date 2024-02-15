import { DeckType } from "../../../../types/DeckType";
import { FlashCardType } from "../../../../types/FlashCardType";
import FlashcardPreviewTile from "../flashcard/FlashcardPreviewTile";

function PreviewFlashCardsList({ handleSelectAndDeselectChosenFlashCard, currentFlashCardIndex, chosenDeck }: { handleSelectAndDeselectChosenFlashCard: (chosenFlashCardIndex: number, index: number) => void; currentFlashCardIndex: number; chosenDeck: DeckType | null }) {
	return (
		<ul className="mt-4 mx-4 flex flex-col gap-3">
			{chosenDeck?.flashcards?.map((flashcard: FlashCardType, index) => (
				<li key={flashcard.front} onClick={() => handleSelectAndDeselectChosenFlashCard(currentFlashCardIndex, index)}>
					<FlashcardPreviewTile flashCardData={flashcard} />
				</li>
			))}
		</ul>
	);
}

export default PreviewFlashCardsList;
