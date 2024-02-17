import { FlashCardType } from "@/types/FlashCardType";
import { Button } from "@chakra-ui/react";

function BackOfCard({ getRandomFlashCard, currentFlashCard }: { getRandomFlashCard: () => void; currentFlashCard: FlashCardType | undefined }) {
	return (
		<>
			<div className="mt-10 bg-white rounded-lg overflow-clip">
				<span className="border-b mt-2 pb-2 px-2 w-full inline-block text-center text-16 italic uppercase font-bold">Back</span>
				<div className=" px-4 max-h-[500px] h-[600px] rounded-lg overflow-scroll overflow-x-auto scrollbar-thin scrollbar-thumb-[#1D2327] scrollbar-track-white">
					<p className="my-4 text-center text-20">{currentFlashCard?.back}</p>
				</div>
			</div>
			<div onClick={() => getRandomFlashCard()} className="py-2 mt-4 flex justify-center gap-4">
				<Button colorScheme={"green"} size="lg">
					Easy
				</Button>
				<Button colorScheme={"orange"} size="lg">
					Medium
				</Button>
				<Button colorScheme={"red"} size="lg">
					Hard
				</Button>
			</div>
		</>
	);
}

export default BackOfCard;
