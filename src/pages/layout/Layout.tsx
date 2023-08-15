import NavbarContainers from "components/navbars-container/NavbarsContainer";
import { Routes, Route } from "react-router-dom";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import "./layout.scss";
import MainPage from "pages/main/Main";
import Projects from "pages/projects/Projects";
import Project from "pages/project/Project";
import { LangContext } from "contexts/LangContext";
import { useContext } from "react";
import Services from "pages/services/Services";

function Layout() {
  const { lang } = useContext(LangContext);
  return (
    <div
      className={`layout ${lang({ ar: "ar", en: "en" }) === "en" ? "ltr" : ""}`}
    >
      <NavbarContainers />
      <div className="main-view">
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="services">
            <Route path="" element={<Services />} />
            <Route path=":serviceId" element={<Services />} />
          </Route>
          <Route path="projects">
            <Route path="" element={<Projects />} />
            <Route path=":projectId" element={<Project />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
