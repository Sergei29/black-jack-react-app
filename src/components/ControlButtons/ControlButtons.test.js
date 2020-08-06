import { shallow } from "enzyme";
import React from "react";

import ControlButtons from "./ControlButtons.component";

describe("ControlButtons", () => {
	let wrapper;
	const mockProps = {
		stickHandler: jest.fn(),
		resetHandler: jest.fn(),
		disabledCondition: false,
	};

	beforeEach(() => {
		wrapper = shallow(<ControlButtons {...mockProps} />);
	});
	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
