import classNames from "classnames";
import type { FlashCardType } from "../../../../types/FlashCardType";

function FlashcardPreviewTile({ index, currentFlashCardIndex, flashcard }: { index: number; currentFlashCardIndex: number; flashcard: FlashCardType }) {
	return (
		<div className={classNames("group px-4 p-2 rounded-lg bg-[#fff] duration-150 hover:bg-[#bfbfbf]", currentFlashCardIndex === index && "bg-[#bfbfbf]")}>
			<h3 className="w-fit mx-auto text-12 font-semibold italic text-[#1A1F23]">{flashcard.front}</h3>
		</div>
	);
}

export default FlashcardPreviewTile;
