import { useContext, useEffect } from "react";
import "./navbar.scss";
import { LockFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { LangContext } from "contexts/LangContext";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { getValueByKey } from "types/SettingsType";

function Navbar() {
  const { changeLang } = useContext(LangContext);
  const state = useSelector((state: { settings: SettingsStateType }) => state);
  useEffect(() => {
    console.log("state ", state);
  }, [state]);
  const getvalue = getValueByKey(state.settings);
  const name = getvalue("slogan");
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
          <NavLink to="/services">{t("links.services")}</NavLink>
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
          {/* <LockFill />
          {t("links.login")} */}
          {typeof name === "string" && name}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
