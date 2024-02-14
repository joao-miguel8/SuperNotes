import { create } from "zustand";
import { DeckType } from "../../types/DeckType";
import { FlashCardType } from "../../types/FlashCardType";

type State = {
	decks: DeckType[];
	chosenDeck: DeckType | null;
};

type Actions = {
	createNewDeck: (newDeck: DeckType) => void;
	updateDeck: (cb: Function) => void;
	createFlashCard: (flashcard: FlashCardType) => void;
	getChosenDeck: (deckIndex: number) => void;
};

export const useDeckStore = create<State & Actions>(set => ({
	decks: [],
	chosenDeck: null,
	createNewDeck(newDeck) {
		set(state => ({
			decks: [...state.decks, newDeck],
		}));
	},
	updateDeck(cb) {
		set(cb);
	},
	createFlashCard(flashCard: FlashCardType) {
		set(state => ({
			decks: state.decks.map(deck => {
				return { ...deck, flashcards: [...deck.flashcards, flashCard] };
			}),
		}));
	},
	getChosenDeck(deckIndex) {
		return set(state => ({
			chosenDeck: state.decks.find((deck, index) => index === deckIndex || null),
		}));
	},
}));
