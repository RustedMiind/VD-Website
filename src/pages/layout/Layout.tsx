import NavbarContainers from "components/navbars-container/NavbarsContainer";
import { Routes, Route, useLocation } from "react-router-dom";
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
import PrivacyPage from "pages/privacy/Privacy";
import ContactUsPage from "pages/contact-us/ContactUsPage";
import NewsPage from "pages/news-page/NewsPage";
import Error404 from "pages/404/Error404";
import DesignService from "pages/DesignService/pages/main/DesignService";
import DesignPreview from "pages/DesignService/pages/design-preview/DesignPerview";
import DesignPurchase from "pages/DesignService/pages/design-purchase/DesignPurchase";
import Infrastructure_projects_Page from "pages/Infrastructure_projects/pages/main";
import ShowProject from "pages/Infrastructure_projects/pages/ShowProject/ShowProject";
import ProjectDetails from "pages/Infrastructure_projects/pages/details/ProjectDetails";
import ProjectMoreDetails from "pages/Infrastructure_projects/pages/moreDetails/ProjectMoreDetails";

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
          <Route
            path="Infrastructure_projects"
            element={<Infrastructure_projects_Page />}
          />
          <Route
            path="Infrastructure_projects/show/:projectId"
            element={<ShowProject />}
          />
          <Route
            path="Infrastructure_projects/details/:projectId"
            element={<ProjectDetails />}
          />
          <Route
            path="Infrastructure_projects/moredetails/:projectId"
            element={<ProjectMoreDetails />}
          />
          <Route path="services">
            <Route path="" element={<Services />} />
            <Route path="design">
              <Route path="" element={<DesignService />} />
              <Route path=":designId" element={<DesignPurchase />} />
            </Route>
            <Route path=":serviceId" element={<ServicePage />} />
          </Route>
          <Route path="e-services">
            <Route path="design">
              <Route path="" element={<DesignService />} />
              <Route path=":designId" element={<DesignPreview />} />
              <Route path="purchase/:designId" element={<DesignPurchase />} />
            </Route>
          </Route>
          <Route path="projects">
            <Route path="" element={<Projects />} />
            <Route path=":projectId" element={<Project />} />
          </Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
