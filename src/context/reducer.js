import actionsTypes from "./actions.types";
import { deck } from "../data/gameData";
import {
	getInitialHands,
	drawCardForPlayer,
	drawCardsForDealer,
	findTheWinner,
} from "./utils";

export const INITIAL_STATE = {
	deck: [],
	player: { cards: [], total: 0 },
	dealer: { cards: [], total: 0 },
	playerDone: false,
	dealerDone: false,
	winner: null,
};

// makes sense later move all calculation game logic to actions

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsTypes.RESET_GAME:
			const { newDeck, newPlayer, newDealer } = getInitialHands(deck);
			return {
				deck: newDeck,
				player: newPlayer,
				dealer: newDealer,
				playerDone: false,
				dealerDone: false,
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

		case actionsTypes.IS_PLAYER_DONE:
			return {
				...state,
				playerDone: action.payload,
			};

		case actionsTypes.PLAYER_IS_DONE:
			return {
				...state,
				playerDone: true,
			};

		case actionsTypes.DRAW_CARDS_FOR_DEALER:
			const data = drawCardsForDealer(
				action.payload.deck,
				action.payload.dealer,
				action.payload.player
			);
			return {
				...state,
				deck: data.newDeck,
				dealer: data.newDealer,
				dealerDone: true,
			};
		case actionsTypes.FIND_WINNER:
			const newWinner = findTheWinner(
				action.payload.dealer,
				action.payload.player
			);
			return {
				...state,
				winner: newWinner,
			};
		default:
			return state;
	}
};
