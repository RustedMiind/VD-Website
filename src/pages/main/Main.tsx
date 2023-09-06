import { requestSetMain } from "redux/middlewares/mainMiddleware";
import AboutSection from "./components/about-section/AboutSection";
import IntroSection from "./components/intro-section/IntroSection";
import LatestNewsSection from "./components/latest-news-section/LatestNewsSection";
import PartnersSection from "./components/partners-section/PartnersSection";
import ServicesSection from "./components/services-section/ServicesSection";
import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";
import { LangContext } from "contexts/LangContext";

function MainPage() {
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetMain(dispatch);
  }, [lang]);

  return (
    <div className="main-page">
      <IntroSection />
      {/* <ScrollAnimation animateIn="animate-fade-to-left"> */}
      <PartnersSection />
      {/* </ScrollAnimation> */}
      <ServicesSection />
      <AboutSection />
      <LatestNewsSection />
    </div>
  );
}

export default MainPage;
