import { DeckType } from "../../types/DeckType";
import { FlashCardType } from "../../types/FlashCardType";
import FlashcardPreviewTile from "../flashcard/FlashcardPreviewTile";

function PreviewFlashCardsList({ chosenDeck }: { chosenDeck: DeckType | null }) {
	return (
		<ul className="mt-4 mx-4 flex flex-col gap-3">
			{chosenDeck?.flashcards?.map((flashcard: FlashCardType) => (
				<FlashcardPreviewTile flashCardData={flashcard} />
			))}
		</ul>
	);
}

export default PreviewFlashCardsList;
