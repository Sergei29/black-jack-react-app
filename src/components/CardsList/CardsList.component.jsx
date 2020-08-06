import React from "react";
//components:
import Card from "../Card/Card.component";
//styles:
import { CardsListContainer } from "./CardsList.styles";

const CardsList = ({ cards }) => {
	return (
		<CardsListContainer>
			{cards.map((card) => (
				<Card key={card.rank + card.color} {...card} />
			))}
		</CardsListContainer>
	);
};

export default React.memo(CardsList);
