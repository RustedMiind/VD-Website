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

function Layout() {
  const { lang } = useContext(LangContext);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div
      className={`layout ${lang({ ar: "ar", en: "en" }) === "en" ? "ltr" : ""}`}
    >
      <NavbarContainers />
      <div className="main-view">
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services">
            <Route path="" element={<Services />} />
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
