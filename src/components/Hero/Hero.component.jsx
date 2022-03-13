import * as React from "react";
import StyledHero from "./Hero.styled";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from '@react-three/drei';
import {memo} from 'react';

const Hero = (props) => {
  const {Overlay, ...rest} = props;

  return (
    <StyledHero {...rest}>
      <Canvas gl={{ antialias: true }} >
        {/*<gridHelper args={[100, 25, 10]} />*/}
        <OrbitControls />
        <ambientLight />
      </Canvas>
      <Overlay />
    </StyledHero>
  );
};

export default memo(Hero);
