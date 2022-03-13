import StyledOverlayMenu from "./OverlayMenu.styled";
import {StyledOverlayMenuItem} from "./OverlayMenu.styled";
import {default as React, memo} from 'react';
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";

export const OverlayMenu = (props) =>
  <StyledOverlayMenu {...props}>
    <OverlayMenuItem label="HOME" to="/" />
    <OverlayMenuItem label="CREATIVE" to="/creative" />
    <OverlayMenuItem label="TECHNOLOGY" to="/technology" />
  </StyledOverlayMenu>

export const OverlayMenuItem = (props) => {
  const {label, to, ...rest} = props;
  const location = useLocation();
  const selected = to === location.pathname;

  return (
    <StyledOverlayMenuItem
      to={to}
      className={selected && 'selected'}
      {...rest}
    >
      {label}
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
