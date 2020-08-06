import { shallow } from "enzyme";
import React from "react";

import Card from "./Card.component";

describe("Card", () => {
	let wrapper;
	const mockProps = {
		rank: "Q",
		color: "clubs",
		imgUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/800px-Playing_card_club_Q.svg.png",
	};

	beforeEach(() => {
		wrapper = shallow(<Card {...mockProps} />);
	});
	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
