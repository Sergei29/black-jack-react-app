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

//styles:
import {
	ControlButtonsContainer,
	HitButtonContainer,
} from "./GameControls.styles";

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
			<HitButtonContainer>
				<button onClick={hitClickHandler} disabled={playerDone}>
					Hit
				</button>
			</HitButtonContainer>
			<ControlButtonsContainer>
				<button onClick={stickClickHandler} disabled={playerDone}>
					Stick
				</button>

				<button onClick={resetClickHandler} disabled={!playerDone}>
					Reset Game
				</button>
			</ControlButtonsContainer>
			<StatusDisplay
				dealerTotal={dealer.total}
				playerTotal={player.total}
				winner={winner}
			/>
		</>
	);
};

export default GameControls;
