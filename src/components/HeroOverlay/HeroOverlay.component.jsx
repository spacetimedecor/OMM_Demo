import * as React from "react";
import StyledHeroOverlay from "./HeroOverlay.styled";
import title from "../../assets/WeareOMM_v3_2x.webp";

const HeroOverlay = (props) => (
  <StyledHeroOverlay {...props} >
    <div id="Stack">
      <img src={title} alt={title} />
      <h2 className="subtitle">An independant Creative Agency</h2>
      <h2 className="subtitle">on a never-ending quest for digital innovation.</h2>
    </div>
  </StyledHeroOverlay>
);

export default HeroOverlay;
