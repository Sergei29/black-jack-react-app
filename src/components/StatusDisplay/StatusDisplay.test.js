import { shallow } from "enzyme";
import React from "react";

import StatusDisplay from "./StatusDisplay.component";

describe("StatusDisplay", () => {
	let wrapper;
	const mockProps = {
		dealerTotal: 10,
		playerTotal: 12,
		winner: null,
	};

	beforeEach(() => {
		wrapper = shallow(<StatusDisplay {...mockProps} />);
	});
	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
