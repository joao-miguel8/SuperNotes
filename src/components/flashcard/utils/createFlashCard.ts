import type { FlashCardType } from "../../../types/FlashCardType";

export const createFlashcard = (createNewFlashCardFn: Function) => {
	const flashCardInitialData: FlashCardType = {
		question: "",
		answer: "",
	};
	createNewFlashCardFn(flashCardInitialData);
};
