import React from "react";
import { StoreProvider } from "../../context/store";
//components:
import Player from "../Player/Player.component";
import Dealer from "../Dealer/Dealer.component";
import GameControls from "../GameControls/GameControls.component";
//styles:
import { BlackJackContainer } from "./BlackJack.styles";

const BlackJack = () => {
	return (
		<StoreProvider>
			<BlackJackContainer>
				<h1>BlackJack game</h1>
				<GameControls />
				<Dealer />
				<Player />
			</BlackJackContainer>
		</StoreProvider>
	);
};

export default BlackJack;
