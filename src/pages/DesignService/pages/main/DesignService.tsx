import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Advantages from "../../components/advantages/Advantages";
import "./design-service.scss";
import Filters, { DesignFiltersType } from "../../components/filters/Filters";
import { Typography, Box, Grid, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { requestSetDesigns } from "redux/middlewares/designsMiddleware";
import { designsStateType } from "redux/reducers/designsSlice";
import CardsContainer from "./CardsContainer";
import AboutSection, { AboutType } from "./about-section/AboutSection";
import { useSnackbar } from "notistack";
import CenteredPagination from "components/CenteredPagination";
import api from "methods/api";
import axios from "axios";
import { useTranslation } from "react-i18next";

function DesignService() {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [designFilters, setDesignFilters] = useState<
    Partial<DesignFiltersType>
  >({});
  const { t } = useTranslation();

  function getDesignsData() {
    let paramsToSend = { page };
    paramsToSend = { ...paramsToSend, ...designFilters };

    requestSetDesigns(dispatch, paramsToSend)
      .then(({ count }) => {
        setTotalPages(count);
      })
      .catch((err) => {
        enqueueSnackbar(
          err.response?.data?.message ||
            err.response?.data?.msg ||
            "تعذر في تحميل بيانات التصاميم",
          { variant: "error" }
        );
      });
  }

  useEffect(() => {
    getDesignsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    page,
    designFilters.area,
    designFilters.bed_rooms_num,
    designFilters.floors_num,
    designFilters.height_floor,
    designFilters.width_floor,
    designFilters.width_front_street,
    designFilters.bathroom_num,
    designFilters.utilities?.length,
  ]);
  const [about, setAbout] = useState<AboutType | "error" | "loading" | "none">(
    "none"
  );

  useEffect(() => {
    setAbout("loading");
    axios
      .get<{ strucre_designs: AboutType }>(api("client/strucre-design"))
      .then(({ data }) => {
        setAbout(data.strucre_designs);
      })
      .catch((err) => {
        setAbout("error");
      });
  }, []);

  const designs = useSelector(
    (state: { designs: designsStateType }) => state.designs.designs
  );

  return (
    <PageBannerLayout
      data={{
        title: t("design.main"),
        subtitle: {
          type: "paragraph",
          paragraph:
            typeof about === "object" && about.vision ? about.vision : "",
        },
        bgImage:
          typeof about === "object" && about.media && about.media[0]
            ? about.media[0].original_url
            : { gradient: true },
      }}
    >
      <div className="tight-section">
        <div className="design-service">
          <AboutSection about={about} />
          <Box mb={1}>
            <Typography mb={3} variant="h6">
              {t("design.title.search")}
            </Typography>
            <Typography variant="body1" color="GrayText">
              {t("titles.search")}
            </Typography>
          </Box>
          <Grid container rowSpacing={2}>
            <Grid item xs={12} md={4} lg={3} xl={2.5}>
              <Filters setDesignFilters={setDesignFilters} />
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
              <CenteredPagination
                onChange={(e, page) => setPage(page)}
                count={totalPages}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default DesignService;
