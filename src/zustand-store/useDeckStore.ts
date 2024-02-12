import { create } from "zustand";
import { DeckType } from "../types/DeckType";

type State = {
	decks: DeckType[];
};

type Actions = {
	createNewDeck: (newDeck: DeckType) => void;
};

export const useDeckStore = create<State & Actions>(set => ({
	decks: [],
	createNewDeck(newDeck) {
		set(state => ({
			decks: [...state.decks, newDeck],
		}));
	},
}));
