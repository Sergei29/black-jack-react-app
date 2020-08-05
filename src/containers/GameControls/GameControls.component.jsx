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
	CurrentStatusContainer,
	ControlButtonsContainer,
	HitButtonContainer,
} from "./GameControls.styles";

const GameControls = () => {
	const { state, dispatch } = useContext(store);
	const { deck, dealer, player, playerDone, dealerDone, winner } = state;

	// logging the updated state:
	useEffect(() => {
		console.log("state updated: ", state);
	}, [state]);

	useEffect(() => {
		//on mount: reset game: dispatch action RESET_GAME
		dispatch(resetGame());
	}, [dispatch]);

	useEffect(() => {
		// when card is served = check if player.total > 21
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
		//dispatch action CARD_FOR_PLAYER
		dispatch(cardForPlayer(deck, player));
	};

	const stickClickHandler = () => {
		//dispatch action PLAYER_DONE
		dispatch(playerIsDone());
	};

	const resetClickHandler = () => {
		//dispatch action RESET_GAME
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
			<CurrentStatusContainer>
				<h2>Game Status: </h2>
				<StatusDisplay
					dealerTotal={dealer.total}
					playerTotal={player.total}
					winner={winner}
				/>
			</CurrentStatusContainer>
		</>
	);
};

export default GameControls;
