import { DifficultyRatingType, FlashCardType } from "@/types/FlashCardType";
import { useDeckStore } from "@/services/zustand/useDeckStore";

function BackOfCard({ setIsAnswerRevealed, getRandomFlashCard, currentFlashCard }: { setIsAnswerRevealed: (boolVal: boolean) => void; getRandomFlashCard: () => void; currentFlashCard: FlashCardType }) {
	const updateFlashCardDifficulty = useDeckStore(state => state.updateFlashCardDifficulty);
	console.log(currentFlashCard);
	return (
		<>
			<div className="mt-8 bg-white rounded-lg overflow-clip">
				<span className="border-b mt-2 pb-2 px-2 w-full inline-block text-center text-16 italic uppercase font-bold">Back</span>
				<div className=" px-4 max-h-[400px] h-[400px] rounded-lg overflow-scroll overflow-x-auto scrollbar-thin scrollbar-thumb-[#1D2327] scrollbar-track-white">
					<p className="my-4 text-center text-20">{currentFlashCard?.back}</p>
				</div>
			</div>
			{/* current card difficulty rating*/}
			{currentFlashCard?.chosenDifficulty && (
				<div className="mt-2">
					<span className="w-fit text-16 text-white">Current Card Difficulty:</span>
					<div className="mt-2 px-4 py-2 w-fit font-bold bg-gray-300 rounded-md">{currentFlashCard?.chosenDifficulty}</div>
				</div>
			)}
			<h5 className="text-center text-white text-20">Rate this Card:</h5>
			<div
				onClick={() => {
					setIsAnswerRevealed(false);
					getRandomFlashCard();
				}}
				className="py-2 mt-2 flex justify-center gap-6">
				<button onClick={() => updateFlashCardDifficulty(currentFlashCard, DifficultyRatingType.veryEasy)} className="px-8 py-4 font-bold text-24 bg-gray-300 rounded-md hover:bg-gray-400 duration-300">
					1
				</button>
				<button onClick={() => updateFlashCardDifficulty(currentFlashCard, DifficultyRatingType.easy)} className="px-8 py-4 font-bold text-24 bg-gray-300 rounded-md hover:bg-gray-400 duration-300">
					2
				</button>
				<button onClick={() => updateFlashCardDifficulty(currentFlashCard, DifficultyRatingType.medium)} className="px-8 py-4 font-bold text-24 bg-gray-300 rounded-md hover:bg-gray-400 duration-300">
					3
				</button>
				<button onClick={() => updateFlashCardDifficulty(currentFlashCard, DifficultyRatingType.hard)} className="px-8 py-4 font-bold text-24 bg-gray-300 rounded-md hover:bg-gray-400 duration-300">
					4
				</button>
				<button onClick={() => updateFlashCardDifficulty(currentFlashCard, DifficultyRatingType.veryHard)} className="px-8 py-4 font-bold text-24 bg-gray-300 rounded-md hover:bg-gray-400 duration-300">
					5
				</button>
			</div>
		</>
	);
}

export default BackOfCard;
