import React, { useContext, useEffect } from "react";
import { store } from "../../context/store";
import {
	resetGame,
	cardForPlayer,
	isPlayerDone,
	playerIsDone,
	cardsForDealer,
	findWinner,
} from "../../context/actions";
//components:
import StatusDisplay from "../../components/StatusDisplay/StatusDisplay.component";
import HitButton from "../../components/HitButton/HitButton.component";
import ControlButtons from "../../components/ControlButtons/ControlButtons.component";

const GameControls = () => {
	const { state, dispatch } = useContext(store);
	const { deck, dealer, player, playerDone, dealerDone, winner } = state;

	useEffect(() => {
		dispatch(resetGame());
	}, [dispatch]);

	useEffect(() => {
		if (!playerDone) {
			dispatch(isPlayerDone(player));
		}
	}, [deck]);

	useEffect(() => {
		if (playerDone) {
			dispatch(cardsForDealer(deck, dealer, player));
		}
	}, [playerDone]);

	useEffect(() => {
		if (dealerDone) {
			dispatch(findWinner(dealer, player));
		}
	}, [dealerDone]);

	const hitClickHandler = () => {
		dispatch(cardForPlayer(deck, player));
	};

	const stickClickHandler = () => {
		dispatch(playerIsDone());
	};

	const resetClickHandler = () => {
		dispatch(resetGame());
	};

	return (
		<>
			<HitButton
				clickHandler={hitClickHandler}
				disabledCondition={playerDone}
			/>

			<ControlButtons
				stickHandler={stickClickHandler}
				resetHandler={resetClickHandler}
				disabledCondition={playerDone}
			/>

			<StatusDisplay
				dealerTotal={dealer.total}
				playerTotal={player.total}
				winner={winner}
			/>
		</>
	);
};

export default GameControls;
