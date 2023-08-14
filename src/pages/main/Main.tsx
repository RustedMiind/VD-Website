import AboutSection from "./components/about-section/AboutSection";
import IntroSection from "./components/intro-section/IntroSection";
import LatestNewsSection from "./components/latest-news-section/LatestNewsSection";
import PartnersSection from "./components/partners-section/PartnersSection";
import ServicesSection from "./components/services-section/ServicesSection";
import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation();

  return (
    <div className="main-page">
      <IntroSection />
      <div>{t("test")}</div>
      <PartnersSection />
      <ServicesSection />
      <AboutSection />
      <LatestNewsSection />
    </div>
  );
}

export default MainPage;
