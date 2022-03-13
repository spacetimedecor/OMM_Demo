import StyledTopBar from "./TopBar.styled";
import { OverlayMenu } from "../../components/OverlayMenu/OverlayMenu.component";
import { StyledImage } from "../common";
import PropTypes from "prop-types";
import {default as React, useState, memo} from 'react';
import logo from "../../assets/omm_logo_black.webp";
import burger from "../../assets/hamburger-menu.svg";

const TopBar = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMenu = () => setShowOverlay(!showOverlay);

  return (
    <>
      <StyledTopBar {...props}>
        <StyledImage
          src={logo}
          alt="logo"
        />
        <StyledImage
          src={burger}
          alt="menu"
          onClick={handleMenu}
        />
        { showOverlay && <OverlayMenu onClick={handleMenu} /> }
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
  backgroundColor: PropTypes.string,

  /**
   * Border color
   */
  borderColor: PropTypes.string,

  /**
   * Color
   */
  color: PropTypes.string,
}
