import { v4 as uuidv4 } from "uuid";
import { useDeckStore } from "@/services/zustand/useDeckStore";
import type { FlashCardType } from "@/types/FlashCardType";

export const useCreateFlashcard = () => {
	const createNewFlashCard = useDeckStore(state => state.createFlashCard);

	const flashCardInitialData: FlashCardType = {
		id: uuidv4(),
		front: "",
		back: "",
	};
	return () => createNewFlashCard(flashCardInitialData);
};
