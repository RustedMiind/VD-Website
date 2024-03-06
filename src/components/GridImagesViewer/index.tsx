import { Grid } from "@mui/material";
import AspectRatioImageV2 from "components/AspectRatioImageV2";

function GridImagesViewer({ images, limitRows = 2 }: PropsType) {
  const imagesToShow: GridImageItem[] = images.slice(0, limitRows * 2);

  return (
    <Grid container spacing={1}>
      {imagesToShow.map((img) => (
        <Grid key={img.src} item xs={6}>
          <AspectRatioImageV2 src={img.src} />
        </Grid>
      ))}
    </Grid>
  );
}

type PropsType = {
  images: GridImageItem[];
  limitRows?: number;
};

export type GridImageItem = {
  src: string;
};

export default GridImagesViewer;
