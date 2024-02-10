export type DifficultyRatingType = "easy" | "medium" | "hard";

export type FlashCardType = {
	question: string | object;
	answer: string | object;
	chosenDifficulty: DifficultyRatingType;
};
