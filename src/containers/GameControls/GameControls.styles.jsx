import styled from "styled-components";

export const HitButtonContainer = styled.div`
	width: 100%;
	height: 200px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/A_face-up_deck_of_cards.jpg/1280px-A_face-up_deck_of_cards.jpg");
	background-size: cover;
	button {
		width: 150px;
		height: 150px;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		color: #fff;
		font-weight: bold;
		font-size: 28px;
		&:focus {
			outline: none;
		}
		&:active {
			color: red;
		}
	}
`;

export const CurrentStatusContainer = styled.div`
	p {
		text-align: center;
	}
`;

export const ControlButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	button {
		border-radius: 0;
		padding: 6px 12px;
		margin: 12px;
		font-size: 21px;
		font-weight: bold;
	}
`;
