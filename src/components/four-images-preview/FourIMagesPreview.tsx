import AspectRatioImage from "components/aspect-ratio-image/AspectRatioImage";
import { Box, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function FourImagesPreview(props: PropsType) {
  const [current, setCurrent] = useState(0);
  const [willChange, setwillChange] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const images = [
    getValueAtIndex(props.images, 1 + current),
    getValueAtIndex(props.images, 2 + current),
    getValueAtIndex(props.images, 3 + current),
    getValueAtIndex(props.images, 4 + current),
  ];
  function handleUpdateImages(inc: number = 1) {
    setAutoPlay(false);
    UpdateImages(inc);
  }
  function UpdateImages(inc: number = 1, waitTime: number = 90) {
    setwillChange(true);
    setTimeout(() => {
      setCurrent(current + inc);
      setwillChange(false);
    }, waitTime);
  }

  useEffect(() => {
    let run = true;
    if (autoPlay) {
      setTimeout(() => {
        if (run) UpdateImages(undefined, 600);
      }, 5000);
    }
    return () => {
      run = false;
    };
  }, [autoPlay, current]);

  return (
    <Stack
      sx={{
        width: "100%",
        transition: autoPlay ? "600ms" : "150ms",
        transitionTimingFunction: "ease-in-out",
        opacity: willChange ? 0 : 1,
      }}
      direction={"row"}
    >
      <Stack sx={{ width: "75%", position: "relative" }}>
        <AspectRatioImage rounded ratio={16 / 9} src={images[0]} />
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            px: 2,
          }}
        >
          <Box borderRadius={1000} bgcolor="background.default">
            <IconButton
              onClick={() => {
                handleUpdateImages();
              }}
              color="primary"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
          <Box borderRadius={1000} bgcolor="background.default">
            <IconButton
              onClick={() => {
                handleUpdateImages(-1);
              }}
              color="primary"
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </Box>
        </Stack>
      </Stack>
      <Stack sx={{ width: "25%", ml: 1 }} justifyContent="space-between">
        <AspectRatioImage rounded ratio={1.88} src={images[1]} />
        <AspectRatioImage rounded ratio={1.88} src={images[2]} />
        <AspectRatioImage rounded ratio={1.88} src={images[3]} />
      </Stack>
    </Stack>
  );
}

type PropsType = {
  images: string[];
};

function getValueAtIndex<T>(array: T[], index: number): T {
  // Handle negative indices
  if (index < 0) {
    index = array.length + index;
  }

  // Handle indices within array bounds
  if (index >= 0 && index < array.length) {
    return array[index];
  }
  // Handle indices outside of array bounds
  else {
    const newIndex = index % array.length;
    return newIndex >= 0 ? array[newIndex] : array[newIndex + array.length];
  }
}

export default FourImagesPreview;
