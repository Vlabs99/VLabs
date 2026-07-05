import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'
import { useIsMobile } from '../../hooks/useIsMobile'

export function AIParticles() {
  const isMobile = useIsMobile()
  return (
    <ParticlesProvider init={async (engine: Engine) => await loadSlim(engine)}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: false,
          background: {
            color: 'transparent',
          },
          fpsLimit: isMobile ? 60 : 120,
          particles: {
            number: {
              value: isMobile ? 15 : 35,
              density: {
                enable: true,
                width: 1920,
                height: 1080,
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
    </ParticlesProvider>
  )
}