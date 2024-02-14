import { useDeckStore } from "../../../services/zustand/useDeckStore";
import type { FlashCardType } from "../../../types/FlashCardType";

export const useCreateFlashcard = () => {
	const createNewFlashCard = useDeckStore(state => state.createFlashCard);

	const flashCardInitialData: FlashCardType = {
		front: "",
		back: "",
	};
	return () => createNewFlashCard(flashCardInitialData);
};
