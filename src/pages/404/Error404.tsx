import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Error404() {
  const data: PageBannerDataType = {
    title: "خطا 404",
    bgImage: { gradient: true },
  };
  const { t } = useTranslation();
  return (
    <PageBannerLayout data={data}>
      <div className="error-page">
        <div className="tight-section">
          <h2>{t("errors.404.error")}</h2>
          <h3>{t("errors.404.message")}</h3>
          <h4 className="text-third">
            <NavLink to="/">عودة للرئيسية</NavLink>
          </h4>
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default Error404;
