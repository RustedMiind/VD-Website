import { Stack, Grid, Box } from "@mui/material";
import InteractiveBackground from "./interactive-background";
import FormComponent from "./FormComponent";
import VideoComponent from "./Video";

function MainPage() {
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
        <Grid container spacing={6}>
          <Grid lg={5} item>
            <Box
              p={{
                xl: 6,
                xs: 2,
              }}
            >
              <FormComponent />
            </Box>
          </Grid>
          <Grid lg={7} item>
            <VideoComponent />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default MainPage;
