import type { FlashCardType } from "../../../types/FlashCardType";

export const createFlashcard = () => {
	const flashCardInitialData: FlashCardType = {
		question: "",
		answer: "",
	};
	return flashCardInitialData;
};
