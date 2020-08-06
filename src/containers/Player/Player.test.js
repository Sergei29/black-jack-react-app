import React from "react";
import { mount } from "enzyme";
import { StoreProvider } from "../../context/store";
import Player from "./Player.component";

describe("Player", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<StoreProvider>
				<Player />
			</StoreProvider>
		);
	});
	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<Player />)).toEqual(true);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
