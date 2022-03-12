import StyledTopBar from "./TopBar.styled";
import { StyledImage } from "../common";
import PropTypes from "prop-types";
import {default as React, useState, memo} from 'react';
import logo from "../../assets/omm_logo_black.webp";
import burger from "../../assets/hamburger-menu.svg";

const TopBar = (props) => {
  const {MenuOverlay, ...rest} = props;
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMenu = () => setShowOverlay(!showOverlay);

  return (
    <>
      <StyledTopBar {...rest}>
        <StyledImage
          src={logo}
          alt="logo"
        />
        <StyledImage
          src={burger}
          alt="menu"
          onClick={handleMenu}
        />
        { MenuOverlay && showOverlay && <MenuOverlay onClick={handleMenu} /> }
      </StyledTopBar>
    </>
  );
}

export default memo(TopBar);

TopBar.propTypes = {
  /**
   * Padding around the graphics
   */
  imagePadding: PropTypes.string,

  /**
   * Height
   */
  height: PropTypes.string,

  /**
   * Background color
   */
  background: PropTypes.string,

  /**
   * Border color
   */
  borderColor: PropTypes.string,

  /**
   * Color
   */
  color: PropTypes.string,
}
