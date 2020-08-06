import React, { useContext } from "react";
import { store } from "../../context/store";
//components:
import CardsList from "../../components/CardsList/CardsList.component";
//styles:
import { DealerContainer } from "./Dealer.styles";

const Dealer = () => {
	const { state } = useContext(store);
	const { cards } = state.dealer;
	return (
		<DealerContainer>
			<h2>Dealer's hand:</h2>
			<div>{cards.length > 0 ? <CardsList cards={cards} /> : null}</div>
		</DealerContainer>
	);
};

export default React.memo(Dealer);
