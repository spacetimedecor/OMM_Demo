import {default as React, Suspense, useRef} from "react";
import StyledHero from "./Hero.styled";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Environment} from '@react-three/drei';
import {memo} from 'react';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { useLoader } from '@react-three/fiber';
import * as THREE from "three";
import { useTheme } from 'styled-components'
import PropTypes from "prop-types";

// THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

// const Scene = ({environmentPreset}) => {
//   const materials = useLoader(MTLLoader, '../../assets/fruits/fruits.mtl');
//   const obj = useLoader(OBJLoader, '../../assets/fruits/fruits.obj', (loader) => {
//     materials.preload();
//     loader.setMaterials(materials);
//   });
//   console.log(obj);
//
//   return <>
//     <primitive object={obj} scale={0.4} />
//   </>;
// };

const Hero = (props) => {
  const {Overlay, environmentPreset, ...rest} = props;
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
            {/*<gridHelper args={[100, 25, 10]} />*/}
            <ambientLight />
            {/*<Scene/>*/}
          </Suspense>
        </Canvas>
      <Overlay />
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
