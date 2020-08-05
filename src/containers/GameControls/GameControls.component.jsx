import React, { useContext, useEffect } from "react";
import { store } from "../../context/store";
import {
	resetGame,
	cardForPlayer,
	isGameOver,
	playerDone,
	drawCardsForDealer,
} from "../../context/actions";

//styles:
import {
	CurrentStatusContainer,
	ControlButtonsContainer,
	HitButtonContainer,
} from "./GameControls.styles";

const GameControls = () => {
	const { state, dispatch } = useContext(store);
	const { deck, dealer, player, gameOver } = state;

	// logging the updated state:
	useEffect(() => {
		console.log("state updated: ", state);
	}, [state]);

	useEffect(() => {
		//on mount: reset game:
		dispatch(resetGame());
	}, [dispatch]);

	useEffect(() => {
		if (!gameOver) {
			dispatch(isGameOver(player));
		}
	}, [deck]);

	useEffect(() => {
		if (gameOver) {
			console.log("game over: dispatch DRAW_CARDS_FOR_DEALER");
			dispatch(drawCardsForDealer(deck, dealer));
		}
	}, [gameOver]);

	const hitClickHandler = () => {
		//dispatch action CARD_FOR_PLAYER
		dispatch(cardForPlayer(deck, player));
	};

	const stickClickHandler = () => {
		//dispatch action PLAYER_DONE
		dispatch(playerDone(deck, dealer));
	};

	const resetClickHandler = () => {
		//dispatch action RESET_GAME
		dispatch(resetGame());
	};

	return (
		<>
			<HitButtonContainer>
				<button onClick={hitClickHandler} disabled={gameOver}>
					Hit
				</button>
			</HitButtonContainer>
			<ControlButtonsContainer>
				<button onClick={stickClickHandler} disabled={gameOver}>
					Stick
				</button>

				<button onClick={resetClickHandler}>Reset Game</button>
			</ControlButtonsContainer>
			<CurrentStatusContainer>
				<h2>Game Status: </h2>
				<p>Player: {player.total}</p>
				<p>Dealer: {dealer.total}</p>
			</CurrentStatusContainer>
		</>
	);
};

export default GameControls;
