import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import InfoWithImage from "../../components/info-with-image/InfoWithImage";

function DesignPreview() {
  return (
    <PageBannerLayout
      data={{ title: "خدمة التصميم", bgImage: { gradient: true } }}
    >
      <div className="tight-section">
        <div className="design-before-preview">
          <InfoWithImage />
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default DesignPreview;
