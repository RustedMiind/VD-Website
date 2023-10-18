import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Advantages from "../../components/advantages/Advantages";
import "./design-service.scss";
import Filters from "../../components/filters/Filters";
import Cards from "../../components/cards/Cards";
import { Typography, Box } from "@mui/material";

function DesignService() {
  return (
    <PageBannerLayout
      data={{ title: "خدمات التربة", bgImage: { gradient: true } }}
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
          <div className="flex flex-wrap">
            <Filters />
            <Cards />
          </div>
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default DesignService;
