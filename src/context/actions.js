/**
 * CARD_FOR_PLAYER
 * PLAYER_DONE
 * IS_PLAYER_DONE
 * DRAW_CARDS_FOR_DEALER
 * FIND_WINNER
 * RESET_GAME
 *
 * resetGame = ()=>{
 *  will fire RESET_GAME at the beginning/reset
 *
 * }
 *
 * cardForPlayer=(currentDeck, player)=>{
 *  will dispatch CARD_FOR_PLAYER
 *  and deliver payload with  state's current deck and player
 * return{
 *  type: CARD_FOR_PLAYER,
 *  payload: {currentDeck, player}
 * }
 *
 * }
 * FIND_WINNER
 * findWinner( playerTotal, dealerTotal){
 *  return{ action type, payload: {playerTotal, dealerTotal}
 * }
 * }
 *
 */

import actionsTypes from "./actions.types";

export const resetGame = () => ({
	type: actionsTypes.RESET_GAME,
});

export const cardForPlayer = (deck, player) => ({
	type: actionsTypes.CARD_FOR_PLAYER,
	payload: { deck, player },
});

export const isPlayerDone = (player) => ({
	type: actionsTypes.IS_PLAYER_DONE,
	payload: player.total > 21,
});

export const playerIsDone = () => ({
	type: actionsTypes.PLAYER_IS_DONE,
});

export const drawCardsForDealer = (deck, dealer, player) => ({
	type: actionsTypes.DRAW_CARDS_FOR_DEALER,
	payload: { deck, dealer, player },
});

export const findWinner = (dealer, player) => ({
	type: actionsTypes.FIND_WINNER,
	payload: { dealer, player },
});
