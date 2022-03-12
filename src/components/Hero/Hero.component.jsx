import * as React from "react";
import StyledHero from "./Hero.styled";

const Hero = (props) => (
  <StyledHero {...props}>
    {props.children}
  </StyledHero>
);

export default Hero;
