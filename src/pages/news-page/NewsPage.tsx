import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import { useTranslation } from "react-i18next";

function NewsPage() {
  const { t } = useTranslation();

  const data = {
    title: t("links.news"),
    bgImage: "",
  };
  return (
    <PageBannerLayout data={data}>
      <div className="news-page"></div>
    </PageBannerLayout>
  );
}

export default NewsPage;
