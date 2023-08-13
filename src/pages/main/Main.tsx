import AboutSection from "./components/about-section/AboutSection";
import IntroSection from "./components/intro-section/IntroSection";
import LatestNewsSection from "./components/latest-news-section/LatestNewsSection";
import PartnersSection from "./components/partners-section/PartnersSection";
import ServicesSection from "./components/services-section/ServicesSection";

function MainPage() {
  return (
    <div className="main-page">
      <IntroSection />
      <PartnersSection />
      <ServicesSection />
      <AboutSection />
      <LatestNewsSection />
    </div>
  );
}

export default MainPage;
