import React from "react";
//styles:
import { FooterContainer } from "./Footer.styles";

const Footer = () => {
	return (
		<FooterContainer>
			<p>
				This application is created for training purposes only. The
				images are used from wikipedia{" "}
				<a href="https://en.wikipedia.org/wiki/Playing_card">
					https://en.wikipedia.org/wiki/Playing_card
				</a>
			</p>
		</FooterContainer>
	);
};

export default Footer;
