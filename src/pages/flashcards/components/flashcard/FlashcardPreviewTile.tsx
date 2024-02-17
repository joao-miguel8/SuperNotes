import classNames from "classnames";
import type { FlashCardType } from "@/types/FlashCardType";

function FlashcardPreviewTile({ currentFlashCard, flashcard }: { currentFlashCard: FlashCardType | null; flashcard: FlashCardType }) {
	return (
		<div className={classNames("group p-2 overflow-hidden rounded-lg duration-150 hover:bg-[#bfbfbf]", currentFlashCard?.id === flashcard.id ? "bg-[#bfbfbf]" : "bg-[#fff]")}>
			<h5 className="text-center text-14 italic font-semibold">Front:</h5>
			<span className="mt-2 w-full inline-block text-center truncate text-14 text-[#1A1F23]">{flashcard.front}</span>
		</div>
	);
}

export default FlashcardPreviewTile;
