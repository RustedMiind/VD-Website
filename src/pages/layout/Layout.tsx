import NavbarContainers from "components/navbars-container/NavbarsContainer";
import { Routes, Route } from "react-router-dom";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import "./layout.scss";
import MainPage from "pages/main/Main";
import Projects from "pages/projects/Projects";
import Project from "pages/project/Project";

function Layout() {
  return (
    <div className="layout">
      <NavbarContainers />
      <div className="main-view">
        <Routes>
          <Route path="" element={<MainPage />} />
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
