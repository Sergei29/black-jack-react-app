/**
 * CARD_FOR_PLAYER
 * PLAYER_DONE
 * IS_GAME_OVER
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

export const findWinner = (playerTotal, dealerTotal) => ({});

export const cardForPlayer = (deck, player) => ({
	type: actionsTypes.CARD_FOR_PLAYER,
	payload: { deck, player },
});
