import { Stack, Grid, Box } from "@mui/material";
import InteractiveBackground from "./interactive-background";

function MainPage() {
  return (
    <Stack
      component="main"
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Interactive Background */}
      <InteractiveBackground />
      {/* Page Content */}
      <Box padding={6}>
        <Grid container spacing={2}>
          <Grid item>Hello</Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default MainPage;
