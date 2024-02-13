import {
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  ButtonProps,
  Tooltip,
  StackProps,
  BoxProps,
} from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import FourImagesPreview from "components/four-images-preview/FourIMagesPreview";
import { useContext } from "react";
import { DesignContext } from "./context";
import { Media } from "types/Media";
import { NavLink } from "react-router-dom";
import MainDataPlaceholder from "./PlaceHolders/MainData";
import { useSelector } from "react-redux";
import { UserState, UserStateType } from "redux/reducers/userSlice";
import { Stack } from "react-bootstrap-icons";
import { AuthContext } from "contexts/Auth";

const TooltipBox = ({ tooltip, ...props }: BoxProps & { tooltip?: string }) =>
  tooltip ? (
    <Tooltip arrow title={tooltip}>
      <Box width={"fit-content"} {...props} />
    </Tooltip>
  ) : (
    <Box {...props} />
  );

function MainDataSection() {
  const { design, status } = useContext(DesignContext);

  const currentPrice = design?.price_after || design?.price_before;
  let images: Media[] = [];
  if (design?.mainImage && Array.isArray(design?.mainImage)) {
    images = images.concat(design.mainImage);
  }
  if (design?.subImages && Array.isArray(design?.subImages)) {
    images = images.concat(design.subImages);
  }

  const user = useSelector((state: UserStateType) => state.user);

  const { openLoginDialog } = useContext(AuthContext);

  return (
    <Grid container sx={{ p: 4, my: 2 }} rowGap={8} component={Paper}>
      {status === "loading" && <MainDataPlaceholder />}
      {status === "none" && (
        <>
          <Grid
            item
            xs={12}
            md={(12 * 1) / 2}
            lg={(12 * 1) / 3}
            sx={{
              pr: {
                xs: 0,
                lg: 4,
              },
            }}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              {design?.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {design?.desc}
            </Typography>
            {currentPrice && (
              <Typography variant="h6" fontWeight={"bold"}>
                يبدأ من
              </Typography>
            )}

            {currentPrice && (
              <Typography
                variant="h5"
                color={"primary.main"}
                fontWeight={"bold"}
              >
                {currentPrice} ر.س.
              </Typography>
            )}
            {design?.price_before && (
              <Typography
                variant="body1"
                color={"error"}
                fontWeight={"bold"}
                sx={{ textDecoration: "line-through" }}
                gutterBottom
              >
                {design.price_before} ر.س.
              </Typography>
            )}

            <Button
              variant="contained"
              sx={{ px: 4, mt: 2 }}
              {...(user.userState === UserState.USER
                ? { component: NavLink, to: "../purchase/" + design?.id }
                : { onClick: openLoginDialog })}
            >
              شراء الآن
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            lg={(12 * 2) / 3}
            sx={{
              pl: {
                xs: 0,
                lg: 4,
              },
            }}
          >
            <FourImagesPreview images={images.map((img) => img.original_url)} />
            {design?.booklet && design?.booklet[0] && (
              <Box mt={0.5}>
                <Button
                  disableElevation
                  variant="contained"
                  sx={{ display: "flex", minWidth: 250, width: "fit-content" }}
                  size="large"
                  endIcon={<FileOpenIcon />}
                  component={"a"}
                  target="_blank"
                  href={design.booklet[0].original_url}
                >
                  عرض الكتيب
                </Button>
              </Box>
            )}
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default MainDataSection;
