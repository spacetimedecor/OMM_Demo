import {default as React, Suspense} from "react";
import StyledHero from "./Hero.styled";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Environment} from '@react-three/drei';
import {memo} from 'react';
import { useTheme } from 'styled-components'
import PropTypes from "prop-types";

const Hero = (props) => {
  const {environmentPreset, ...rest} = props;
  const theme = useTheme();

  return (
    <StyledHero {...rest}>
        <Canvas gl={{ antialias: true }} >
          <Suspense fallback={null}>
            <OrbitControls target={[30, 45, 35]} />
            <Environment
              preset={environmentPreset || theme.heroOverlay.environmentPreset}
              background
            />
            <ambientLight />
          </Suspense>
        </Canvas>
      {props.children}
    </StyledHero>
  );
};

export default memo(Hero);

Hero.propTypes = {
  /**
   * Environment Preset
   */
  environmentPreset: PropTypes.string,
}
