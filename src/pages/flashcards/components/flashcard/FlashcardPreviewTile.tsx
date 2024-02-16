import classNames from "classnames";
import type { FlashCardType } from "../../../../types/FlashCardType";

function FlashcardPreviewTile({ flashcard }: { flashcard: FlashCardType }) {
	return (
		<div className={classNames("group px-4 p-2 rounded-lg hover:bg-[#dfdfdf]", "bg-[#fff] duration-150")}>
			<h3 className="w-fit mx-auto text-12 font-semibold italic text-[#1A1F23]">{flashcard.front}</h3>
		</div>
	);
}

export default FlashcardPreviewTile;
