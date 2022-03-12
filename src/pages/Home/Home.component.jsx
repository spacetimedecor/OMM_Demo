import * as React from "react";
import StyledHome from "./Home.styled";

const Home = (props) => (
  <StyledHome {...props}>
    {props.children}
  </StyledHome>
);

export default Home;
