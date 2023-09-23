import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Advantages from "./components/Advantages";
import "./design-service.scss";

function DesignService() {
  return (
    <PageBannerLayout
      data={{ title: "خدمات التربة", bgImage: { gradient: true } }}
    >
      <div className="design-service">
        <Advantages />
        semmmfasd
      </div>
    </PageBannerLayout>
  );
}

export default DesignService;
