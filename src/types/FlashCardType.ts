export enum DifficultyRatingType {
	veryEasy = 1,
	easy = 2,
	medium = 3,
	hard = 4,
	veryHard = 5,
}

export type FlashCardType = {
	id: string;
	front: string;
	back: string;
	chosenDifficulty?: DifficultyRatingType | null;
};
