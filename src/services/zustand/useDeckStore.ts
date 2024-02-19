import { create } from "zustand";
import { DeckType } from "../../types/DeckType";
import { FlashCardType, DifficultyRatingType } from "../../types/FlashCardType";

type State = {
	decks: DeckType[];
};

type Actions = {
	createNewDeck: (newDeck: DeckType) => void;
	DeleteSelectedDecks: (decks: DeckType[]) => void;
	updateDeck: (updatedDeck: DeckType[]) => void;
	createFlashCard: (flashcard: FlashCardType) => void;
	updateFlashCardDifficulty: (updatedFlashCard: FlashCardType, difficultyLevel: DifficultyRatingType) => void;
	updateFlashCardBackValue: (updatedFlashCard: FlashCardType, backFieldVal: string) => void;
	updateFlashCardFrontValue: (updatedFlashCard: FlashCardType, FrontFieldVal: string) => void;
	updateFlashCardDateLastStudied: (updatedFlashCard: FlashCardType) => void;
};

export const useDeckStore = create<State & Actions>(set => ({
	decks: [],
	createNewDeck(newDeck) {
		set(state => ({
			decks: [...state.decks, newDeck],
		}));
	},
	DeleteSelectedDecks(selectedDecks: DeckType[]) {
		set(state => ({
			decks: state.decks.filter(deck => !selectedDecks.includes(deck)),
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
	updateFlashCardBackValue(updatedFlashCard: FlashCardType, backFieldVal: string) {
		set(state => ({
			decks: state.decks.map(deck => ({
				...deck,
				flashcards: deck.flashcards.map((flashcard: FlashCardType) => {
					if (flashcard.id === updatedFlashCard.id) {
						return { ...flashcard, back: backFieldVal };
					}
					return flashcard;
				}),
			})),
		}));
	},
	updateFlashCardFrontValue(updatedFlashCard: FlashCardType, frontFieldVal) {
		set(state => ({
			decks: state.decks.map(deck => ({
				...deck,
				flashcards: deck.flashcards.map((flashcard: FlashCardType) => {
					return flashcard.id === updatedFlashCard.id ? { ...flashcard, front: frontFieldVal } : flashcard;
				}),
			})),
		}));
	},
	updateFlashCardDateLastStudied(updatedFlashCard) {
		const currentDate = new Date();
		set(state => ({
			decks: state.decks.map(deck => ({
				...deck,
				flashcards: deck.flashcards.map((flashcard: FlashCardType) => {
					if (flashcard?.id === updatedFlashCard?.id) {
						return { ...flashcard, dateLastStudied: currentDate };
					}
					return flashcard;
				}),
			})),
		}));
	},
}));
