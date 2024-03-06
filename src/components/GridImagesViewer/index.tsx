import { Grid } from "@mui/material";
import AspectRatioImageV2 from "components/AspectRatioImageV2";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

function GridImagesViewer({ images, limitRows = 2 }: PropsType) {
  const imagesToShow: GridImageItem[] = images.slice(0, limitRows * 2);
  const [toggler, setToggler] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const openImage = (index: number) => {
    setCurrentImageIndex(index);
    setToggler(!toggler);
  };
  return (
    <>
      <Grid container spacing={1}>
        {imagesToShow.map((img, index) => (
          <Grid key={img.src} item xs={6}>
            <AspectRatioImageV2
              src={img.src}
              onClick={() => openImage(index)}
            />
          </Grid>
        ))}
      </Grid>

      <FsLightbox
        toggler={toggler}
        sources={images.map((img) => (
          <img alt="toggler" style={{ height: "90vh" }} src={img.src} />
        ))}
        sourceIndex={currentImageIndex}
      />
    </>
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
