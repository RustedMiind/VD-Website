import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Advantages from "../../components/advantages/Advantages";
import "./design-service.scss";
import Filters from "../../components/filters/Filters";
import { Typography, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestSetDesigns } from "redux/middlewares/designsMiddleware";
import { designsStateType } from "redux/reducers/designsSlice";
import CardsContainer from "./CardsContainer";

function DesignService() {
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetDesigns(dispatch).then(console.log).catch(console.log);
  }, [dispatch]);

  const designs = useSelector(
    (state: { designs: designsStateType }) => state.designs.designs
  );
  console.log("designs", designs);

  return (
    <PageBannerLayout
      data={{ title: "خدمات التصاميم", bgImage: { gradient: true } }}
    >
      <div className="tight-section">
        <div className="design-service">
          <Advantages />
          <Box mb={1}>
            <Typography mb={3} variant="h6">
              ابحث عن تصميمك
            </Typography>
            <Typography variant="body1" color="GrayText">
              البحث
            </Typography>
          </Box>
          <Grid container rowSpacing={2}>
            <Grid item xs={12} md={4} lg={3} xl={2.5}>
              <Filters />
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              lg={9}
              xl={9.5}
              sx={{ pl: { xs: 0, md: 2 } }}
            >
              <CardsContainer />
            </Grid>
          </Grid>
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default DesignService;
