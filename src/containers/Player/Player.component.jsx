import React, { useContext } from "react";
import { store } from "../../context/store";
//components:
import CardsList from "../../components/CardsList/CardsList.component";
//styles:
import { PlayerContainer } from "./Player.styles";

const Player = () => {
	const { state } = useContext(store);
	const { cards } = state.player;

	return (
		<PlayerContainer>
			<h2>Player's hand:</h2>
			<div>{cards.length > 0 ? <CardsList cards={cards} /> : null}</div>
		</PlayerContainer>
	);
};

export default Player;
