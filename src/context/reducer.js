import actionsTypes from "./actions.types";
import { deck } from "../data/gameData";
import { getInitialHands, drawCardForPlayer } from "./utils";

export const INITIAL_STATE = {
	deck: [],
	player: { cards: [], total: 0 },
	dealer: { cards: [], total: 0 },
	gameOver: false,
	winner: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsTypes.RESET_GAME:
			const { newDeck, newPlayer, newDealer } = getInitialHands(deck);
			return {
				deck: newDeck,
				player: newPlayer,
				dealer: newDealer,
				gameOver: false,
				winner: null,
			};

		case actionsTypes.CARD_FOR_PLAYER:
			const update = drawCardForPlayer(
				action.payload.deck,
				action.payload.player
			);
			return {
				...state,
				deck: update.newDeck,
				player: update.newPlayer,
			};

		default:
			return state;
	}
};
