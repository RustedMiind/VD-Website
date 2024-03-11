import { Stack } from "@mui/material";
import bg from "./map-image.jpg";
import "./background-image.scss";

function BackgroundImage() {
  return (
    <Stack className="interactive-background-image">
      <img src={bg} alt="map" className="bg-image" />
    </Stack>
  );
}

export default BackgroundImage;
