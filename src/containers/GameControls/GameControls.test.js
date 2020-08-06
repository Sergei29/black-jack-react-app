import React from "react";
import { mount } from "enzyme";
import { StoreProvider } from "../../context/store";
import GameControls from "./GameControls.component";

describe("GameControls", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<StoreProvider>
				<GameControls />
			</StoreProvider>
		);
	});
	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<GameControls />)).toEqual(true);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
