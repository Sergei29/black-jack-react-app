import React from "react";
//components:
import Card from "../Card/Card.component";
//styles:
import { CardsListContainer } from "./CardsList.styles";

const CardsList = ({ cards }) => {
	return (
		<CardsListContainer>
			{cards.map(({ rank, color, imgUrl }) => (
				<Card key={rank + color} imgUrl={imgUrl} />
			))}
		</CardsListContainer>
	);
};

export default CardsList;
