import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import InfoWithImage from "../../components/info-with-image/InfoWithImage";

function DesignBeforePreview() {
  return (
    <PageBannerLayout
      data={{ title: "خدمات التربة", bgImage: { gradient: true } }}
    >
      <div className="tight-section">
        <div className="design-before-preview">
          <InfoWithImage />
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default DesignBeforePreview;
