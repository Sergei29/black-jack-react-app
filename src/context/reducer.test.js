import { reducer, INITIAL_STATE } from "./reducer";
import { deck } from "../data/gameData";
import {
	resetGame,
	cardForPlayer,
	isPlayerDone,
	playerIsDone,
	cardsForDealer,
	findWinner,
} from "./actions";

describe("reducer", () => {
	const mockPlayer = {
		cards: [
			{
				rank: "2",
				color: "clubs",
				imgUrl:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/800px-Playing_card_club_2.svg.png",
			},
			{
				color: "diamonds",
				imgUrl:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/800px-Playing_card_diamond_6.svg.png",
				rank: "6",
			},
		],
		total: 8,
	};

	const mockDealer = {
		cards: [
			{
				rank: "7",
				color: "diamonds",
				imgUrl:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/800px-Playing_card_diamond_7.svg.png",
			},
		],
		total: 7,
	};

	it("should return initial state in default case", () => {
		const expectedState = INITIAL_STATE;
		const receivedState = reducer(undefined, {});
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle RESET_GAME event", () => {
		const action = resetGame();
		const prevState = INITIAL_STATE;
		const expectedState = {
			...prevState,
			...action.payload,
		};
		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle CARD_FOR_PLAYER event", () => {
		const prevState = INITIAL_STATE;
		const action = cardForPlayer(deck, mockPlayer);
		const expectedState = {
			...prevState,
			deck: action.payload.newDeck,
			player: action.payload.newPlayer,
		};
		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle IS_PLAYER_DONE event", () => {
		const prevState = INITIAL_STATE;
		const action = isPlayerDone(mockPlayer);
		const expectedState = {
			...prevState,
			playerDone: action.payload,
		};
		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle PLAYER_IS_DONE event", () => {
		const prevState = INITIAL_STATE;
		const action = playerIsDone();
		const expectedState = {
			...prevState,
			playerDone: true,
		};
		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle CARDS_FOR_DEALER event", () => {
		const prevState = INITIAL_STATE;
		const action = cardsForDealer(deck, mockDealer, mockPlayer);
		const expectedState = {
			...prevState,
			deck: action.payload.newDeck,
			dealer: action.payload.newDealer,
			dealerDone: true,
		};
		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});

	it("should handle FIND_WINNER event", () => {
		const prevState = INITIAL_STATE;
		const action = findWinner(mockDealer, mockPlayer);
		const expectedState = {
			...prevState,
			winner: action.payload,
		};
		const receivedState = reducer(prevState, action);
		expect(receivedState).toEqual(expectedState);
	});
});
