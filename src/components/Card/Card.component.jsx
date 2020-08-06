import React from "react";
//styles:
import { CardContainer } from "./Card.styles";

const Card = ({ imgUrl, rank, color }) => {
	const title = `card ${rank} of ${color}`;
	return (
		<CardContainer>
			<img src={imgUrl} alt={title} title={title} />
		</CardContainer>
	);
};

export default React.memo(Card);
