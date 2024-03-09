import { Stack } from "@mui/material";
import BackgroundImage from "./background-image/BackgroundImage";
import ParticlesBG from "./particles/Particles";

function InteractiveBackground() {
  return (
    <Stack
      sx={{
        position: "absolute",
        width: 1,
        height: 1,
        top: 0,
        left: 0,
        overflow: "hidden",
        zIndex: -1000,
      }}
    >
      <BackgroundImage />
      <ParticlesBG />
    </Stack>
  );
}

export default InteractiveBackground;
