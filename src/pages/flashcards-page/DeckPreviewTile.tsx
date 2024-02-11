import classNames from "classnames";
import type { DeckType } from "../../types/DeckType";

function DeckPreviewTile({ deckPreviewData, currentDeckIndex, decks }: { deckPreviewData: DeckType; currentDeckIndex: number; decks: DeckType[] }) {
	const { name, description } = deckPreviewData ?? {};
	return (
		<div className={classNames("px-4 p-2 rounded-lg hover:bg-[#353E43]", decks[currentDeckIndex]?.name === name && "bg-[#353E43]")}>
			<h4 className="text-18 font-semibold truncate text-white">{name}</h4>
			<p className="mt-2 text-14 text-[#A9ADAF] line-clamp-2">{description}</p>
		</div>
	);
}

export default DeckPreviewTile;
