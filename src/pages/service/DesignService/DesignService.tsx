import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Advantages from "./components/advantages/Advantages";
import "./design-service.scss";
import Filters from "./components/filters/Filters";

function DesignService() {
  return (
    <PageBannerLayout
      data={{ title: "خدمات التربة", bgImage: { gradient: true } }}
    >
      <div className="design-service">
        <Advantages />
        <div className="d-flex flex-wrap">
          <Filters />
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default DesignService;
