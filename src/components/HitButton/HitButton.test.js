import { shallow } from "enzyme";
import React from "react";

import HitButton from "./HitButton.component";

describe("HitButton", () => {
	let wrapper;
	const mockProps = {
		clickHandler: jest.fn(),
		disabledCondition: false,
	};

	beforeEach(() => {
		wrapper = shallow(<HitButton {...mockProps} />);
	});
	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
