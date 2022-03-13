import * as React from "react";
import StyledHome from "./Home.styled";
import Hero from "../../components/Hero";
import GraphicBreak from "../../components/GraphicBreak";
import HeroOverlay from "../../components/HeroOverlay";

const Home = (props) => (
  <StyledHome {...props}>
    <Hero Overlay={ () => <HeroOverlay /> }/>
    <GraphicBreak {...props} />
  </StyledHome>
);

export default Home;
