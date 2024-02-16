export type DifficultyRatingType = "easy" | "medium" | "hard";

export type FlashCardType = {
	id: number;
	front: string;
	back: string;
	chosenDifficulty?: DifficultyRatingType;
};
