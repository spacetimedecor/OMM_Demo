import StyledOverlayMenu from "./OverlayMenu.styled";
import {StyledOverlayMenuItem} from "./OverlayMenu.styled";
import {default as React} from 'react';
import {
  useLocation
} from "react-router-dom";

export const OverlayMenu = (props) => {
  return (
    <StyledOverlayMenu {...props}>
      {props.children}
    </StyledOverlayMenu>
  );
}

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

export default OverlayMenu;
