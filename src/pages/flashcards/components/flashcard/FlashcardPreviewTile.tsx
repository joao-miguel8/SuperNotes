import classNames from "classnames";
import type { FlashCardType } from "@/types/FlashCardType";

function FlashcardPreviewTile({ currentFlashCard, flashcard }: { currentFlashCard: FlashCardType | null; flashcard: FlashCardType }) {
	return (
		<div className={classNames("group p-2 overflow-hidden rounded-lg bg-[#fff] duration-150 hover:bg-[#bfbfbf]", currentFlashCard === flashcard && "bg-[#bfbfbf]")}>
			<h5 className="text-center text-14 italic font-semibold">Front:</h5>
			<span className="mt-2 w-full inline-block text-center truncate text-14 text-[#1A1F23]">{flashcard.front}</span>
		</div>
	);
}

export default FlashcardPreviewTile;
