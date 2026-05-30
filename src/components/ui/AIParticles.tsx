import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

export function AIParticles() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: 'transparent',
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            value: ['#00f0ff', '#8b5cf6'],
          },
          links: {
            enable: true,
            color: '#00f0ff',
            distance: 140,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'bounce',
            },
          },
          opacity: {
            value: 0.25,
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}