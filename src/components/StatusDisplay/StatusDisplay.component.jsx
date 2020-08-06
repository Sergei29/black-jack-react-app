import React from "react";
import { getTheQuoteOfTheDay } from "./utils";
//styles;
import {
	PhraseContainer,
	ScoreContainer,
	StatusDisplayContainer,
} from "./StatusDisplay.styles";

const StatusDisplay = ({ dealerTotal, playerTotal, winner }) => {
	let phrase = null;
	if (winner) {
		const quote = getTheQuoteOfTheDay(dealerTotal, playerTotal, winner);
		phrase = (
			<PhraseContainer>
				<h2>{winner} Won!</h2> <p>{quote}</p>{" "}
			</PhraseContainer>
		);
	}
	return (
		<StatusDisplayContainer>
			<ScoreContainer>
				<p>Dealer: {dealerTotal}</p>
				<p>Player: {playerTotal}</p>
			</ScoreContainer>
			{phrase}
		</StatusDisplayContainer>
	);
};

export default StatusDisplay;
