import { useContext } from "react";
import "./navbar.scss";
import { LockFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { LangContext } from "contexts/LangContext";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { changeLang } = useContext(LangContext);

  const { t } = useTranslation();
  return (
    <nav className="navbar">
      <ul className="right">
        <li>
          <NavLink to="/">{t("links.home")}</NavLink>
        </li>
        <li>
          <NavLink to="/projects">{t("links.projects")}</NavLink>
        </li>

        <li>
          <a
            className="active"
            role="button"
            onClick={() => {
              changeLang("en");
              changeLanguage("en");
            }}
          >
            تغيير اللغة
          </a>
        </li>
      </ul>
      <div className="left">
        <a href=" ">
          <LockFill />
          تسجيل الدخول
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
