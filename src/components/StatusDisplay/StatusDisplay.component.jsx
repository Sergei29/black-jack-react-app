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
				<h3>
					Congrats {winner} won: {dealerTotal}:{playerTotal}!
				</h3>{" "}
				<p>{quote}</p>{" "}
			</PhraseContainer>
		);
	}
	return (
		<StatusDisplayContainer>
			{phrase}
			<ScoreContainer>
				<p>Dealer: {dealerTotal}</p>
				<p>Player: {playerTotal}</p>
			</ScoreContainer>
		</StatusDisplayContainer>
	);
};

export default StatusDisplay;
