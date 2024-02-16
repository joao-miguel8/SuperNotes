import { generateRandomID } from "@/api/util/generateRandomID";
import { useDeckStore } from "@/services/zustand/useDeckStore";
import type { FlashCardType } from "@/types/FlashCardType";

export const useCreateFlashcard = () => {
	const createNewFlashCard = useDeckStore(state => state.createFlashCard);

	const eleID = generateRandomID();
	const flashCardInitialData: FlashCardType = {
		id: eleID,
		front: "",
		back: "",
	};
	return () => createNewFlashCard(flashCardInitialData);
};
