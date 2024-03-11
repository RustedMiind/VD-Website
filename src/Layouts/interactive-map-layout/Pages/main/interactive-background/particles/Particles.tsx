import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import bgImg from "assets/images/infrestructurePeojectsImages/Infrastructure_projects_minPageBG.png";

const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <div
      style={{
        width: "110%",
        height: "110%",
        position: "absolute",
        top: "-5%",
        left: "-5%",
        zIndex: 1000,
      }}
    >
      <Particles
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          // background: {
          //   image: `url(${bgImg})`,
          //   size: "100% 100%",
          // },
          fpsLimit: 90,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 0,
              },
              repulse: {
                distance: 50,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 1.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 70,
            },

            opacity: {
              value: 3,
            },
            shape: {
              type: "circle",
              polygon: { sides: 3 },
            },
            size: {
              value: { min: 0, max: 0 },
            },
          },
          smooth: true,
        }}
      />
    </div>
  );
};

export default ParticlesBG;
