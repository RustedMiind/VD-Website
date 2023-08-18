import { requestSetMain } from "redux/middlewares/mainMiddleware";
import AboutSection from "./components/about-section/AboutSection";
import IntroSection from "./components/intro-section/IntroSection";
import LatestNewsSection from "./components/latest-news-section/LatestNewsSection";
import PartnersSection from "./components/partners-section/PartnersSection";
import ServicesSection from "./components/services-section/ServicesSection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetMain(dispatch);
  }, []);

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
