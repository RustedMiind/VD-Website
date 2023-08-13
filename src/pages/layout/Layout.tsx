import NavbarContainers from "components/navbars-container/NavbarsContainer";
import { Routes, Route } from "react-router-dom";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import "./layout.scss";
import MainPage from "pages/main/Main";
import Projects from "pages/projects/Projects";

function Layout() {
  return (
    <div className="layout">
      <NavbarContainers />
      <div className="main-view">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
