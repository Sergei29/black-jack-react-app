import styled from "styled-components";

export const HitButtonContainer = styled.div`
	position: relative;
	width: 100%;
	height: 200px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	button {
		z-index: 10;
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

export const ImageContainer = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-image: url(${(props) => props.imgUrl});
	background-size: cover;
	z-index: 1;
`;
