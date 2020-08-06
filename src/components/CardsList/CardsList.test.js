import { shallow } from "enzyme";
import React from "react";
import { deck } from "../../data/gameData";

import CardsList from "./CardsList.component";

describe("CardsList", () => {
	let wrapper;
	const mockProps = deck.slice(0, 3);

	beforeEach(() => {
		wrapper = shallow(<CardsList cards={mockProps} />);
	});
	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
