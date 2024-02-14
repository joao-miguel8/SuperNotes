import { useDeckStore } from "../services/zustand/useDeckStore";
import type { FlashCardType } from "../types/FlashCardType";

export const createFlashcard = () => {
	const createNewFlashCard = useDeckStore(state => state.createFlashCard);

	const flashCardInitialData: FlashCardType = {
		question: "",
		answer: "",
	};
	createNewFlashCard(flashCardInitialData);
};
