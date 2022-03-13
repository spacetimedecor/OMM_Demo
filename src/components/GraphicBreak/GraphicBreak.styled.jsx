import styled from "styled-components";
import logo from "../../assets/omm_logo_black.webp";

export const StyledGraphicBreak = styled("div")`
  background-image: url(${logo});
  background-repeat: repeat-x;
  width: ${() => `${96 * 30}px`};
  height: ${() => `${35}px`};
`;

export default StyledGraphicBreak;
