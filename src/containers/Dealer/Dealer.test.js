import React from "react";
import { mount } from "enzyme";
import { StoreProvider } from "../../context/store";
import Dealer from "./Dealer.component";

describe("Dealer", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<StoreProvider>
				<Dealer />
			</StoreProvider>
		);
	});
	it("should render the component", () => {
		expect(wrapper.containsMatchingElement(<Dealer />)).toEqual(true);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
