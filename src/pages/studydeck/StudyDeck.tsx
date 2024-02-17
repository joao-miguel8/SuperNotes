import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDeckStore } from "@/services/zustand/useDeckStore";
import type { FlashCardType } from "@/types/FlashCardType";
import BackOfCard from "./components/BackOfCard";

function StudyDeck() {
	const history = useLocation();
	const decks = useDeckStore(state => state.decks);
	const [isStudyingDeck, setIsStudyingDeck] = useState(true);

	const chosenDeck = decks.find(deck => deck?.id === history?.state);
	const [currentFlashCard, setCurrentFlashCard] = useState<FlashCardType | undefined>();

	const getRandomFlashCard = () => {
		if (chosenDeck?.flashcards) {
			const randomCardIndex = Math.floor(chosenDeck?.flashcards.length * Math.random());
			setCurrentFlashCard(chosenDeck?.flashcards[randomCardIndex]);
		}
	};

	return (
		<section className="my-4 bg-[#1D2327]">
			<div className="mt-8 mx-10">
				<div className="w-full flex justify-center">
					<div className="relative w-full flex justify-center items-center">
						<button onClick={() => setIsStudyingDeck(false)} className="px-4 py-2 right-0 absolute font-semibold text-white bg-gray-500 hover:bg-gray-700 duration-150 rounded-md">
							Stop Reviewing Deck
						</button>
					</div>
				</div>

				{/* back of card */}
				<BackOfCard currentFlashCard={currentFlashCard} getRandomFlashCard={getRandomFlashCard} />
			</div>
		</section>
	);
}

export default StudyDeck;
