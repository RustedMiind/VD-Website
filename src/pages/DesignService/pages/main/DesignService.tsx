import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Advantages from "../../components/advantages/Advantages";
import "./design-service.scss";
import Filters from "../../components/filters/Filters";
import Cards from "../../components/cards/Cards";
import { TextField } from "@mui/material";

function DesignService() {
  return (
    <PageBannerLayout
      data={{ title: "خدمات التربة", bgImage: { gradient: true } }}
    >
      <div className="tight-section">
        <TextField label="مرحبا بكم في مواي" />
        <div className="design-service">
          <Advantages />
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
