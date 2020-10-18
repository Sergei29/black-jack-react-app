import React from "react";
import { StoreProvider } from "../../context/store";
//components:
import Player from "../Player/Player.component";
import Dealer from "../Dealer/Dealer.component";
import GameControls from "../GameControls/GameControls.component";
import Footer from "../../components/Footer/Footer.component";
//styles:
import { BlackJackContainer } from "./BlackJack.styles";

/**
 * @description functional component
 * @returns {JSX} component markup
 */
const BlackJack = () => (
  <BlackJackContainer>
    <h1>BlackJack</h1>
    <StoreProvider>
      <GameControls />
      <Dealer />
      <Player />
    </StoreProvider>
    <Footer />
  </BlackJackContainer>
);

export default BlackJack;
