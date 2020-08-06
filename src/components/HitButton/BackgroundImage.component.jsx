import React from "react";
import { backgroundImage } from "../../data/gameData";
//styles:
import { ImageContainer } from "./HitButton.styles";

const BackgroundImage = () => <ImageContainer imgUrl={backgroundImage} />;

export default React.memo(BackgroundImage);
