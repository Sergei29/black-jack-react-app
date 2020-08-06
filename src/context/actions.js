import { deck } from "../data/gameData";
import actionsTypes from "./actions.types";
import {
	getInitialHands,
	drawCardForPlayer,
	drawCardsForDealer,
	findTheWinner,
} from "./utils";

export const resetGame = () => {
	const newState = {
		playerDone: false,
		dealerDone: false,
		winner: null,
	};
	const { newDeck, newDealer, newPlayer } = getInitialHands(deck);

	newState.deck = newDeck;
	newState.dealer = newDealer;
	newState.player = newPlayer;

	return {
		type: actionsTypes.RESET_GAME,
		payload: newState,
	};
};

export const cardForPlayer = (deck, player) => {
	const { newDeck, newPlayer } = drawCardForPlayer(deck, player);
	return {
		type: actionsTypes.CARD_FOR_PLAYER,
		payload: { newDeck, newPlayer },
	};
};

export const isPlayerDone = (player) => ({
	type: actionsTypes.IS_PLAYER_DONE,
	payload: player.total > 21,
});

export const playerIsDone = () => ({
	type: actionsTypes.PLAYER_IS_DONE,
});

export const cardsForDealer = (deck, dealer, player) => {
	const { newDeck, newDealer } = drawCardsForDealer(deck, dealer, player);
	return {
		type: actionsTypes.CARDS_FOR_DEALER,
		payload: { newDeck, newDealer },
	};
};

export const findWinner = (dealer, player) => {
	const newWinner = findTheWinner(dealer, player);
	return {
		type: actionsTypes.FIND_WINNER,
		payload: newWinner,
	};
};
