import { Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDeckStore } from "@/services/zustand/useDeckStore";
import type { FlashCardType } from "@/types/FlashCardType";
import BackOfCard from "./components/BackOfCard";

function StudyDeck() {
	const history = useLocation();
	const decks = useDeckStore(state => state.decks);

	const [isStudyingDeck, setIsStudyingDeck] = useState(true);
	const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

	const chosenDeck = decks.find(deck => deck?.id === history?.state);
	const [currentFlashCard, setCurrentFlashCard] = useState<FlashCardType | null>();

	const getRandomFlashCard = () => {
		if (chosenDeck?.flashcards) {
			const randomCardIndex = Math.floor(chosenDeck?.flashcards.length * Math.random());
			setCurrentFlashCard(chosenDeck?.flashcards[randomCardIndex]);
		}
	};

	useEffect(() => {
		getRandomFlashCard();
	}, []);

	console.log(decks);
	return (
		<section className="my-4 bg-[#1D2327]">
			<div className="mt-8 mx-10">
				<div className="w-full flex justify-center">
					<div className="relative w-full flex justify-center items-center">
						<button onClick={() => setIsStudyingDeck(false)} className="px-4 py-2 right-0 absolute text-14 font-semibold text-white bg-gray-500 hover:bg-gray-700 duration-150 rounded-md">
							Stop Reviewing Deck
						</button>
					</div>
				</div>

				{isAnswerRevealed ? (
					//  back of card
					<BackOfCard setIsAnswerRevealed={setIsAnswerRevealed} currentFlashCard={currentFlashCard} getRandomFlashCard={getRandomFlashCard} />
				) : (
					// front of card
					<>
						<div className="mt-10 bg-white rounded-lg overflow-clip">
							<span className="border-b mt-2 pb-2 px-2 w-full inline-block text-center text-16 italic uppercase font-bold">Front</span>
							<div className=" px-4 max-h-[500px] h-[600px] rounded-lg overflow-scroll overflow-x-auto scrollbar-thin scrollbar-thumb-[#1D2327] scrollbar-track-white">
								<p className="my-4 text-center text-20">{currentFlashCard?.front}</p>
							</div>
						</div>
						<div
							onClick={() => {
								setIsAnswerRevealed(true);
							}}
							className="py-2 mt-4 flex justify-center gap-4">
							<Button colorScheme={"gray"} size="lg">
								Reveal Answer
							</Button>
						</div>
					</>
				)}
			</div>
		</section>
	);
}

export default StudyDeck;
