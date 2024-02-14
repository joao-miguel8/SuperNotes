export type DifficultyRatingType = "easy" | "medium" | "hard";

export type FlashCardType = {
	front: string;
	back: string;
	chosenDifficulty?: DifficultyRatingType;
};
