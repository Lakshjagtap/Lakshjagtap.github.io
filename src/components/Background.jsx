// src/components/Background.jsx
import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random';

const STARS_COUNT = 5000;
const STAR_RADIUS = 1.2;
const STAR_COLOR = '#f272c8';
const STAR_SIZE = 0.004;

const Stars = (props) => {
  const ref = useRef();
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(STARS_COUNT), { radius: STAR_RADIUS }),
    []
  );

  useFrame((state, delta) => {
    if (ref.current.position.z > (0.9 + 0.1)) {
      ref.current.position.z = -0.4;
    }
    ref.current.position.z += delta / 3;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={STAR_COLOR}
          size={STAR_SIZE}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Background = () => {
  return (
    <div className='w-full h-auto absolute blur-[0.5px] inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Background;
