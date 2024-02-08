import classNames from "classnames";
import type { BoardType } from "../types/BoardType";

function BoardPreviewTile({ name, description, currentBoardIndex, boards }: BoardType & { currentBoardIndex: number; boards: BoardType[] }) {
	return (
		<div className={classNames("px-4 p-2 rounded-lg hover:bg-[#353E43]", boards[currentBoardIndex]?.name === name && "bg-[#353E43]")}>
			<h4 className="text-18 font-semibold truncate text-white">{name}</h4>
			<p className="mt-2 text-14 text-[#0b0b12] line-clamp-2">{description}</p>
		</div>
	);
}

export default BoardPreviewTile;
