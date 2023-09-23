import NavbarContainers from "components/navbars-container/NavbarsContainer";
import { Routes, Route, useLocation } from "react-router-dom";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import "./layout.scss";
import MainPage from "pages/main/Main";
import Projects from "pages/projects/Projects";
import Project from "pages/project/Project";
import { LangContext } from "contexts/LangContext";
import { useContext, useEffect } from "react";
import Services from "pages/services/Services";
import ServicePage from "pages/service/Service";
import Footer from "components/footer/Footer";
import AboutUs from "pages/about-us/AboutUs";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import PrivacyPage from "pages/privacy/Privacy";
import ContactUsPage from "pages/contact-us/ContactUsPage";
import NewsPage from "pages/news-page/NewsPage";
import DesignService from "pages/service/DesignService/DesignService";

function Layout() {
  const { lang } = useContext(LangContext);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={`layout ${lang() === "en" ? "ltr" : "rtl"}`}>
      <NavbarContainers />
      <div className="main-view">
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="services">
            <Route path="" element={<Services />} />
            <Route path="design" element={<DesignService />} />
            <Route path=":serviceId" element={<ServicePage />} />
          </Route>
          <Route path="projects">
            <Route path="" element={<Projects />} />
            <Route path=":projectId" element={<Project />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
