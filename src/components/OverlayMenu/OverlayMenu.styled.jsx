import styled from "styled-components";
import { header1 } from "../common";
import { Link } from "react-router-dom";
import { breakpoints } from "../../utils/breakpoints";

const StyledOverlayMenu = styled("span")`
  color: ${({ theme }) => theme.colors.primaryColor};
  width: 100vw;
  height: 100vh;
  text-align: center;
  position: fixed;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.overlayMenu.backgroundColor};;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
  
  ${ ({ onClick }) => onClick ? '&:hover { cursor: pointer }' : '' }
  
  > .selected {
    color: white;
  }
`;

export const StyledOverlayMenuItem = styled(Link)`

  width: min-content;
  white-space: nowrap;
  justify-self: center;
  align-self: center;
  
  padding: 15px 50px 15px 50px;
  
  ${header1};

  @media screen and (max-width: ${breakpoints.tablet}) {
    border-left: none;
  }
  
  border-left: white solid 1px;
  color: #868686;
  transition: color 0.25s;
  
  &:hover {
    color: #e66465;
  }

  &:first-of-type {
    border-left: none;
  }
`;

export default StyledOverlayMenu;
