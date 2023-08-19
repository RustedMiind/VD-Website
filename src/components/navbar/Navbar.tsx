import { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { List, LockFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { LangContext } from "contexts/LangContext";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { getValueByKey } from "types/SettingsType";
import logo from "assets/images/logo-vision.png";

function Navbar() {
  const { changeLang } = useContext(LangContext);
  const state = useSelector((state: { settings: SettingsStateType }) => state);
  const getvalue = getValueByKey(state.settings);
  const name = getvalue("slogan");
  const { t } = useTranslation();
  const [navVisibilty, setNavVisibilty] = useState<"show" | "hide">("hide");
  return (
    <nav className="navbar">
      <button
        className="menu-btn"
        onClick={() => {
          setNavVisibilty("show");
        }}
      >
        <List />
      </button>
      <ul
        className={`right ${navVisibilty}`}
        onClick={() => {
          setNavVisibilty("hide");
        }}
      >
        <li>
          <NavLink to="/">{t("links.home")}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{t("links.aboutUs")}</NavLink>
        </li>
        {/* <li>
          <NavLink to="/projects">{t("links.projects")}</NavLink>
        </li>
        <li>
          <NavLink to="/services">{t("links.services")}</NavLink>
        </li> */}

        {/* <li>
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
        </li> */}
      </ul>
      <div className="left">
        <NavLink to={"/"} className="logo-link">
          <img src={logo} alt="" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
