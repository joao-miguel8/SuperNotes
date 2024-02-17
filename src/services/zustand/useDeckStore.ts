import { create } from "zustand";
import { DeckType } from "../../types/DeckType";
import { FlashCardType, DifficultyRatingType } from "../../types/FlashCardType";

type State = {
	decks: DeckType[];
};

type Actions = {
	createNewDeck: (newDeck: DeckType) => void;
	updateDeck: (updatedDeck: DeckType[]) => void;
	createFlashCard: (flashcard: FlashCardType) => void;
	updateFlashCardDifficulty: (flashcard: FlashCardType | null, difficultyLevel: DifficultyRatingType) => void;
};

export const useDeckStore = create<State & Actions>(set => ({
	decks: [],
	createNewDeck(newDeck) {
		set(state => ({
			decks: [...state.decks, newDeck],
		}));
	},
	updateDeck(updatedDeck) {
		set({ decks: updatedDeck });
	},
	createFlashCard(flashCard: FlashCardType) {
		set(state => ({
			decks: state.decks.map(deck => {
				return { ...deck, flashcards: [...deck.flashcards, flashCard] };
			}),
		}));
	},
	updateFlashCardDifficulty(updatedFlashCard: FlashCardType, difficultyLevel: DifficultyRatingType) {
		set(state => ({
			decks: state.decks.map((deck: DeckType) => ({
				...deck,
				flashcards: deck.flashcards.map((flashcard: FlashCardType) => {
					return flashcard.id === updatedFlashCard.id ? { ...flashcard, chosenDifficulty: difficultyLevel } : flashcard;
				}),
			})),
		}));
	},
}));
