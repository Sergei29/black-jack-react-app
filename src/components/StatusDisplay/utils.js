import { phrases, roles } from "../../data/gameData";

export const getTheQuoteOfTheDay = (dealerTotal, playerTotal, winner) => {
	if (winner === roles.dealer) {
		return dealerTotal === playerTotal
			? phrases.dealer[0]
			: phrases.dealer[1];
	} else {
		return phrases.player[
			Math.floor(Math.random() * phrases.player.length)
		];
	}
};
