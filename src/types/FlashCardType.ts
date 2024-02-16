export type DifficultyRatingType = "easy" | "medium" | "hard";

export type FlashCardType = {
	id: string;
	front: string;
	back: string;
	chosenDifficulty?: DifficultyRatingType;
};
