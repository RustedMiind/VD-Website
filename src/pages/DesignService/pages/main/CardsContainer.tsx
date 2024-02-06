import { Grid, GridProps } from "@mui/material";
import ImageCard from "image-card/ImageCard";
import DesignCard from "pages/DesignService/components/design-card/DesignCard";
import { useSelector } from "react-redux";
import { designsStateType } from "redux/reducers/designsSlice";
import CardPlaceholder from "./CardPlaceholder";

export const CardGridItem = (props: GridProps) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    lg={4}
    {...props}
    sx={{ px: 1, ...props.sx }}
  />
);

function CardsContainer() {
  const designs = useSelector(
    (state: { designs: designsStateType }) => state.designs.designs
  );

  return (
    <Grid container rowSpacing={2}>
      {designs === "loading" && <CardPlaceholder />}
      {Array.isArray(designs) &&
        designs.map((design) => (
          <CardGridItem key={design.id}>
            <DesignCard design={design} />
          </CardGridItem>
        ))}
    </Grid>
  );
}

export default CardsContainer;
