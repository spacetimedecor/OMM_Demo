import * as React from "react";
import StyledHey from "./Hey.styled";

const Hey = ({
  children,
}) => (
  <StyledHey>
    Hey!
    {children}
  </StyledHey>
);

export default Hey;
