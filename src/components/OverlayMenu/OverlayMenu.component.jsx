import StyledOverlayMenu from "./OverlayMenu.styled";
import {StyledOverlayMenuItem} from "./OverlayMenu.styled";
import {default as React, memo} from 'react';
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";

export const OverlayMenu = (props) =>
  <StyledOverlayMenu {...props}>
    <OverlayMenuItem to="/">HOME</OverlayMenuItem>
    <OverlayMenuItem to="/creative">CREATIVE</OverlayMenuItem>
    <OverlayMenuItem to="/technology">TECHNOLOGY</OverlayMenuItem>
  </StyledOverlayMenu>

export const OverlayMenuItem = (props) => {
  const {to} = props;
  const location = useLocation();
  const selected = to === location.pathname;

  return (
    <StyledOverlayMenuItem
      to={to}
      className={selected && 'selected'}
      {...props}
    >
      {props.children}
    </StyledOverlayMenuItem>
  )
}

export default memo(OverlayMenu);

OverlayMenu.propTypes = {
  /**
   * Background color
   */
  backgroundColor: PropTypes.string,
}
