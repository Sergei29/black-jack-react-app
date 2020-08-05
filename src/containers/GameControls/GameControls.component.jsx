import React, { useContext, useEffect } from "react";
import { store } from "../../context/store";
import { resetGame, cardForPlayer } from "../../context/actions";

//styles:
import {
	CurrentStatusContainer,
	ControlButtonsContainer,
	HitButtonContainer,
} from "./GameControls.styles";

const GameControls = () => {
	const { state, dispatch } = useContext(store);
	const { dealer, player } = state;

	useEffect(() => {
		//on mount: reset game:
		dispatch(resetGame());
	}, []);

	useEffect(() => {
		console.log("deck update > state :>> ", state);
		// on state change for deck array length ( or maybe player and dealer total);
		// if (state.gameOver) dispatch action FIND_WINNER that checks state.gameOver first then finds winner if gameOver=true
		//
		if (state.gameOver) {
			console.log("game over: dispatch FIND_WINNER");
		}
	}, [state.deck]);

	const hitClickHandler = () => {
		//dispatch action CARD_FOR_PLAYER
		// payload: {state.deck, player},
		dispatch(cardForPlayer(state.deck, state.player));
	};

	const stickClickHandler = () => {
		//dispatch action PLAYER_DONE
	};

	const resetClickHandler = () => {
		//dispatch action RESET_GAME
		dispatch(resetGame());
	};

	return (
		<>
			<HitButtonContainer>
				<button onClick={hitClickHandler}>Hit</button>
			</HitButtonContainer>
			<ControlButtonsContainer>
				<button onClick={stickClickHandler}>Stick</button>

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
