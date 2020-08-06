import React from "react";
import { mount } from "enzyme";
//components:
import { StoreProvider } from "../../context/store";
import BlackJack from "./BlackJack.component";
import GameControls from "../GameControls/GameControls.component";
import Player from "../Player/Player.component";
import Dealer from "../Dealer/Dealer.component";
import Footer from "../../components/Footer/Footer.component";

describe("GameControls", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<BlackJack>
				<StoreProvider>
					<GameControls />
					<Dealer />
					<Player />
				</StoreProvider>
				<Footer />
			</BlackJack>
		);
	});

	it("should contain the <GameControls /> component", () => {
		expect(wrapper.containsMatchingElement(<GameControls />)).toEqual(true);
	});
	it("should contain the <Dealer /> component", () => {
		expect(wrapper.containsMatchingElement(<Dealer />)).toEqual(true);
	});
	it("should contain the <Player /> component", () => {
		expect(wrapper.containsMatchingElement(<Player />)).toEqual(true);
	});
	it("should contain the <Footer /> component", () => {
		expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
	});
});
