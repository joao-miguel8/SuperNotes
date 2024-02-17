import { Button } from "@chakra-ui/react";
import { DifficultyRatingType, FlashCardType } from "@/types/FlashCardType";
import { useDeckStore } from "@/services/zustand/useDeckStore";

function BackOfCard({ setIsAnswerRevealed, getRandomFlashCard, currentFlashCard }: { setIsAnswerRevealed: (boolVal: boolean) => void; getRandomFlashCard: () => void; currentFlashCard: FlashCardType }) {
	const updateFlashCardDifficulty = useDeckStore(state => state.updateFlashCardDifficulty);

	return (
		<>
			<div className="mt-10 bg-white rounded-lg overflow-clip">
				<span className="border-b mt-2 pb-2 px-2 w-full inline-block text-center text-16 italic uppercase font-bold">Back</span>
				<div className=" px-4 max-h-[500px] h-[600px] rounded-lg overflow-scroll overflow-x-auto scrollbar-thin scrollbar-thumb-[#1D2327] scrollbar-track-white">
					<p className="my-4 text-center text-20">{currentFlashCard?.back}</p>
				</div>
			</div>
			<div
				onClick={() => {
					setIsAnswerRevealed(false);
					getRandomFlashCard();
				}}
				className="py-2 mt-4 flex justify-center gap-4">
				<Button onClick={() => updateFlashCardDifficulty(currentFlashCard, DifficultyRatingType.Easy)} colorScheme={"green"} size="lg">
					Easy
				</Button>
				<Button onClick={() => updateFlashCardDifficulty(currentFlashCard, DifficultyRatingType.Medium)} colorScheme={"orange"} size="lg">
					Medium
				</Button>
				<Button onClick={() => updateFlashCardDifficulty(currentFlashCard, DifficultyRatingType.Hard)} colorScheme={"red"} size="lg">
					Hard
				</Button>
			</div>
		</>
	);
}

export default BackOfCard;
