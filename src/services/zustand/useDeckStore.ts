import { create } from "zustand";
import { DeckType } from "../../types/DeckType";
import { FlashCardType } from "../../types/FlashCardType";

type State = {
	decks: DeckType[];
};

type Actions = {
	createNewDeck: (newDeck: DeckType) => void;
	updateDeck: (updatedDeck: DeckType[]) => void;
	createFlashCard: (flashcard: FlashCardType) => void;
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
}));
