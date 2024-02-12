import classNames from "classnames";

function FlashcardPreviewTile() {
	return (
		<div className={classNames("group px-4 p-2 rounded-lg hover:bg-[#353E43]", "bg-[#fff]")}>
			<h4 className="text-center text-16 font-semibold line-clamp-2 text-[#1A1F23] group-hover:text-white">test card Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, maxime?</h4>
		</div>
	);
}

export default FlashcardPreviewTile;
