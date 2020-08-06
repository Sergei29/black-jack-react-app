import { roles } from "../data/gameData";

export const shuffleDeck = (deck) => [...deck].sort(() => Math.random() - 0.5);

export const calculateTotal = (currentTotal, card) => {
	let score = 0;
	if (!isNaN(+card.rank)) {
		score = +card.rank;
	} else if (card.rank === "A") {
		score = currentTotal + 11 > 21 ? 1 : 11;
	} else {
		score = 10;
	}
	return currentTotal + score;
};

export const getInitialHands = (deck) => {
	const newDeck = shuffleDeck([...deck]);
	const newPlayer = { cards: [], total: 0 };
	const newDealer = { cards: [], total: 0 };

	// first: 2 cards for player:
	for (let i = 0; i < 2; i++) {
		const card = newDeck.pop();
		newPlayer.cards.push(card);
		newPlayer.total = calculateTotal(newPlayer.total, card);
	}

	// then: 1 card for dealer:
	const cardForDealer = newDeck.pop();
	newDealer.cards.push(cardForDealer);
	newDealer.total = calculateTotal(newDealer.total, cardForDealer);

	return {
		newDeck,
		newPlayer,
		newDealer,
	};
};

export const drawCardForPlayer = (currentDeck, player) => {
	const newPlayer = {
		...player,
		cards: [...player.cards],
	};
	const newDeck = [...currentDeck];
	const newCard = newDeck.pop();
	newPlayer.cards.push(newCard);
	newPlayer.total = calculateTotal(player.total, newCard);

	return { newDeck, newPlayer };
};

export const drawCardsForDealer = (deck, dealer, player) => {
	let newDealer = {
		...dealer,
		cards: [...dealer.cards],
	};
	const newDeck = [...deck];

	if (player.total > 21) {
		return { newDeck, newDealer };
	}

	while (newDealer.total < player.total) {
		const card = newDeck.pop();
		newDealer.cards.push(card);
		newDealer.total = calculateTotal(newDealer.total, card);
	}

	return { newDeck, newDealer };
};

export const findTheWinner = (dealer, player) => {
	let newWinner = null;

	if (dealer.total > 21) return roles.player;
	if (player.total > 21) return roles.dealer;

	if (dealer.total >= player.total) {
		newWinner = roles.dealer;
	} else {
		newWinner = roles.player;
	}
	return newWinner;
};
