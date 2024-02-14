import classNames from "classnames";
import type { FlashCardType } from "../../../../types/FlashCardType";

function FlashcardPreviewTile({ flashCardData }: { flashCardData: FlashCardType }) {
	const { front } = flashCardData ?? {};

	return (
		<div className={classNames("group px-4 p-2 rounded-lg hover:bg-[#dfdfdf]", "bg-[#fff] duration-150")}>
			<h3 className="w-fit mx-auto text-12 font-semibold italic text-[#1A1F23]">Question:</h3>
			<input value={front} type="text" className="w-full text-center text-16 font-regular line-clamp-2 bg-transparent outline-none text-[#1A1F23]" />
		</div>
	);
}

export default FlashcardPreviewTile;
