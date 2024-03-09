import { Stack, Grid, Box } from "@mui/material";
import InteractiveBackground from "./interactive-background";
import FormComponent from "./FormComponent";
import VideoComponent from "./Video";

import video1 from "./placeholder1.mp4";
import video2 from "./placeholder2.mp4";
import video3 from "./placeholder3.mp4";
import { useMemo, useState } from "react";

function MainPage() {
  const [selectedMap, setSelectedMap] = useState<string | undefined>("rain");
  const currentVideo = useMemo(() => {
    switch (selectedMap) {
      case "rain":
        return video2;
      case "elec":
        return video1;
      case "water":
        return video3;

      default:
        return video2;
    }
  }, [selectedMap]);

  return (
    <Stack
      component="main"
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      {/* Interactive Background */}
      <InteractiveBackground />
      {/* Page Content */}
      <Box padding={6}>
        <Grid container spacing={6} alignItems={"center"}>
          <Grid lg={5} item>
            <Box
              p={{
                xl: 6,
                xs: 2,
              }}
            >
              <FormComponent
                selectMap={setSelectedMap}
                selectedMap={selectedMap}
              />
            </Box>
          </Grid>
          <Grid lg={7} item>
            <VideoComponent video={currentVideo} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default MainPage;
