import type { FlashCardType } from "../../../types/FlashCardType";

export const createFlashcard = () => {
	const flashCardInitialData: FlashCardType = {
		front: "",
		back: "",
	};
	return flashCardInitialData;
};
