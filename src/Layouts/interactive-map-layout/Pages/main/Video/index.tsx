import { Box, Paper } from "@mui/material";
import ReactPlayer from "react-player";

function VideoComponent({ video }: PropsType) {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        ":before": {
          content: '""',
          zIndex: -10,
          position: "absolute",
          top: -20,
          left: 20,
          width: 1,
          height: 1,
          borderRadius: `${theme.shape.borderRadius}px`,
          background:
            "radial-gradient(76.87% 77.36% at 10.71% 10.1%, #78818D 0%, #422411 100%) ,linear-gradient(223.38deg, rgba(255, 255, 255, 0) 44.65%, rgba(255, 255, 255, 0.25) 48.69%, rgba(255, 255, 255, 0) 52.57%)",
        },
      })}
    >
      <Paper sx={{ overflow: "hidden", height: 500 }}>
        <ReactPlayer
          key={video}
          playing={true}
          muted={true}
          controls={true}
          width={"100%"}
          height={"100%"}
          url={video}
        />
      </Paper>
    </Box>
  );
}

type PropsType = { video: string };

export default VideoComponent;
