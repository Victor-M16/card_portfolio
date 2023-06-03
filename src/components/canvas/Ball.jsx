import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgurl]);

  return (
    <Float 
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#fff8eb"
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      gl={{
        preserveDrawingBuffer: true,
        antialias: false, // Disable antialiasing for better performance on mobile devices
      }}
      dpr={window.devicePixelRatio} // Set device pixel ratio for better resolution on high-density screens
      camera={{ position: [0, 0, 5] }} // Set a default camera position
    >
      <Suspense fallback={<CanvasLoader />}>

        {/* Use gesture-based controls for mobile devices */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          rotateSpeed={0.5}
          touchZoom={false}
          touchRotate={true}
          autoRotate={false}
        />

        <Ball imgurl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
