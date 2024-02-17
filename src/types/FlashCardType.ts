export enum DifficultyRatingType {
	Easy = "easy",
	Medium = "medium",
	Hard = "hard",
}

export type FlashCardType = {
	id: string;
	front: string;
	back: string;
	chosenDifficulty?: DifficultyRatingType | null;
};
