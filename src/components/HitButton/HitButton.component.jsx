import React from "react";
//styles:
import { HitButtonContainer } from "./HitButton.styles";

const HitButton = ({ clickHandler, disabledCondition }) => {
	return (
		<HitButtonContainer>
			<button onClick={clickHandler} disabled={disabledCondition}>
				Hit
			</button>
		</HitButtonContainer>
	);
};

export default HitButton;
