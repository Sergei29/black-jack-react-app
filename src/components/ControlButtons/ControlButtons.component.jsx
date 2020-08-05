import React from "react";
//styles:
import { ControlButtonsContainer } from "./ControlButtons.styles";

const ControlButtons = ({ stickHandler, resetHandler, disabledCondition }) => {
	return (
		<ControlButtonsContainer>
			<button onClick={stickHandler} disabled={disabledCondition}>
				Stick
			</button>

			<button onClick={resetHandler} disabled={!disabledCondition}>
				Reset Game
			</button>
		</ControlButtonsContainer>
	);
};

export default ControlButtons;
