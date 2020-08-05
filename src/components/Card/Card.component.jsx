import React from "react";
import { CardContainer } from "./Card.styles";

const Card = ({ imgUrl }) => {
	return (
		<CardContainer>
			<img src={imgUrl} alt="card" />
		</CardContainer>
	);
};

export default Card;
