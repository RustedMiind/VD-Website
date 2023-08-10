import NavbarContainers from "components/navbars-container/NavbarsContainer";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import "./layout.scss";
import MainPage from "pages/main/Main";

function Layout() {
  return (
    <div className="layout">
      <NavbarContainers />
      <div className="main-view">
        <MainPage />
      </div>
    </div>
  );
}

export default Layout;
