import classNames from "classnames";
import type { DeckType } from "@/types/DeckType";

function DeckPreviewTile({ selectAndDeselectChosenDeck, deckPreviewData, chosenDeck }: { selectAndDeselectChosenDeck: () => void; deckPreviewData: DeckType; chosenDeck: DeckType | null }) {
	const { name, description } = deckPreviewData ?? {};
	return (
		<div className={classNames("pl-4 flex gap-4 rounded-lg bg-[#353E43] hover:bg-[#455058]", chosenDeck?.name === name && "bg-[#353E43]")}>
			<input type="checkbox" className="cursor-pointer" />
			<div onClick={selectAndDeselectChosenDeck} className=" overflow-hidden p-4 w-full border-l-2 border-[#2b3135] cursor-default">
				<h5 className="text-16 font-semibold text-white truncate">{name}</h5>
				<p className="text-14 text-[#A9ADAF] line-clamp-2">{description}</p>
			</div>
		</div>
	);
}

export default DeckPreviewTile;
