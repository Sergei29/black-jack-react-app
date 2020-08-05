import { roles } from "../../context/utils";

export const getTheQuoteOfTheDay = (dealerTotal, playerTotal, winner) => {
	if (winner === roles.dealer) {
		return dealerTotal === playerTotal
			? "Casino Always Wins!"
			: "Dear Player, Better Luck Next Time!";
	} else {
		const random = Math.floor(Math.random() * 5);
		switch (random) {
			case 0:
				return "Lucky today! One more round ?";
			case 1:
				return "Take your money AND RUN !!!";
			case 2:
				return "Wow!!! Party time !!!";
			case 3:
				return "Police ! Get him!!! the Player is cheating!";
			case 4:
				return "Congratulations man! Some royal tip ?";
			default:
				break;
		}
	}
};
