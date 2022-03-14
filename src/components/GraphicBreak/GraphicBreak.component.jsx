import {default as React, useEffect, useRef, memo} from "react";
import gsap from "gsap";
import StyledGraphicBreak from "./GraphicBreak.styled";
import PropTypes from "prop-types";
import { useTheme } from 'styled-components'

const GraphicBreak = (props) => {
  const theme = useTheme();
  const {translateX, translateY, duration, ease} = props;

  useEffect(() => {
    gsap
      .to("#graphic-break1", {
        translateX: translateX || theme.graphicBreak.translateX,
        translateY: translateY || theme.graphicBreak.translateY,
        duration: duration || theme.graphicBreak.duration,
        ease: ease || theme.graphicBreak.ease,
        repeat: -1,
        yoyo: true,
      })
  }, [translateX, translateY, duration, ease]);

  return (
    <StyledGraphicBreak
      {...props}
      id="graphic-break1"
    />
  );
};

export default GraphicBreak;

GraphicBreak.propTypes = {
  /**
   * How much the animation animates on the X axis.
   */
  translateX: PropTypes.string,

  /**
   * How much the animation animates on the Y axis.
   */
  translateY: PropTypes.string,

  /**
   * How long the animation takes.
   */
  duration: PropTypes.number,

  /**
   * Animation easing function.
   */
  easing: PropTypes.string,
}
