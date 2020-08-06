import React from "react";
//styles:
import { HitButtonContainer } from "./HitButton.styles";
// components:
import BackgroundImage from "./BackgroundImage.component";

const HitButton = ({ clickHandler, disabledCondition }) => {
	return (
		<HitButtonContainer>
			<BackgroundImage />
			<button onClick={clickHandler} disabled={disabledCondition}>
				Hit
			</button>
		</HitButtonContainer>
	);
};

export default React.memo(HitButton);
