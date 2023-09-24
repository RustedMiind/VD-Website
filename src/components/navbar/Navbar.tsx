/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react";
import "./navbar.scss";
import { List } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { getValueByKey } from "types/SettingsType";
import logo from "assets/images/logo-vision.png";
import { navigationRoutes } from "methods/data/navigationRoutes";
import { changeLanguage } from "i18next";
import { LangContext } from "contexts/LangContext";

function Navbar() {
  const { changeLang, lang } = useContext(LangContext);
  const currentLang = lang();
  const state = useSelector((state: { settings: SettingsStateType }) => state);
  const getvalue = getValueByKey(state.settings);
  const name = getvalue("slogan");
  const { t } = useTranslation();
  const [navVisibilty, setNavVisibilty] = useState<"show" | "hide">("hide");
  return (
    <nav className="navbar tight-section">
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
        {navigationRoutes.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path}>{t(link.name)}</NavLink>
          </li>
        ))}

        {/* <li>
          <NavLink to="/services">{t("links.services")}</NavLink>
        </li> */}

        <li>
          <a
            className="lang-btn"
            role="button"
            onClick={() => {
              const current = lang();
              if (current === "en") changeLang("ar");
              else if (current === "ar") changeLang("en");
              console.log(current, "Currentxxxxxxxxxxxx");
            }}
          >
            {currentLang === "ar" && "EN"}
            {currentLang === "en" && "العربية"}
          </a>
        </li>
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
