
import React,{ useCallback } from "react";
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particleConfig from '../config/particleConfig'
const ParticlesBackground = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
       
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
   <Particles  init={particlesInit} loaded={particlesLoaded}
   options={particleConfig}>
   </Particles>
  )
}

export default ParticlesBackground
