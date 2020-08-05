import actionsTypes from "./actions.types";

export const INITIAL_STATE = {
	deck: [],
	player: { cards: [], total: 0 },
	dealer: { cards: [], total: 0 },
	playerDone: false,
	dealerDone: false,
	winner: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsTypes.RESET_GAME:
			return action.payload;

		case actionsTypes.CARD_FOR_PLAYER:
			return {
				...state,
				deck: action.payload.newDeck,
				player: action.payload.newPlayer,
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

		case actionsTypes.CARDS_FOR_DEALER:
			return {
				...state,
				deck: action.payload.newDeck,
				dealer: action.payload.newDealer,
				dealerDone: true,
			};

		case actionsTypes.FIND_WINNER:
			return {
				...state,
				winner: action.payload,
			};

		default:
			return state;
	}
};
