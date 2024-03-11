import { Box, Paper, Stack } from "@mui/material";
import AspectRatio from "components/AspectRatio";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function VideoComponent({ video }: PropsType) {
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    setTimeout(() => setCurrentVideo(video), 600);
  }, [video]);

  return (
    <Stack alignItems={"center"} height={"fit-content"} width={1}>
      <Box
        width={{ xl: 850, lg: 700, md: 550, xs: 1 }}
        sx={(theme) => ({
          bgcolor: "transparent",
          position: "relative",
          transition: "300ms ease-in",
          opacity: video === currentVideo ? 1 : 0,
          transform: video === currentVideo ? undefined : "scale(1.1)",
          // filter: video === currentVideo ? undefined : "blur(25px)",
          ":before": {
            content: '""',
            zIndex: -10,
            position: "absolute",
            top: -20,
            left: 20,
            width: 1,
            height: 1,
            borderRadius: `${theme.shape.borderRadius}px`,
            opacity: 0.7,
            background:
              "radial-gradient(76.87% 77.36% at 10.71% 10.1%, #78818D 0%, #422411 100%) ,linear-gradient(223.38deg, rgba(255, 255, 255, 0) 44.65%, rgba(255, 255, 255, 0.25) 48.69%, rgba(255, 255, 255, 0) 52.57%)",
          },
        })}
      >
        <AspectRatio ratio={16 / 9}>
          <Box>
            <Paper
              sx={{
                overflow: "hidden",
                bgcolor: "transparent",
                height: 1,
              }}
            >
              <ReactPlayer
                key={currentVideo}
                playing={true}
                muted={true}
                controls={false}
                width={"100%"}
                height={"100%"}
                loop
                url={currentVideo}
              />
            </Paper>
          </Box>
        </AspectRatio>
      </Box>
    </Stack>
  );
}

type PropsType = { video: string };

export default VideoComponent;
