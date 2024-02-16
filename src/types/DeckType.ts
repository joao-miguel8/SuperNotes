import type { FlashCardType } from "./FlashCardType";

export type DeckType = {
	id: number;
	name: string;
	description: string;
	flashcards: FlashCardType[];
	lastReviewed: Date | null;
	subject?: string;
	isBookmarked?: boolean;
};
