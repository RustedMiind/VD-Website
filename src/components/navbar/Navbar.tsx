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
import { Button, Menu, MenuItem, MenuList, Paper } from "@mui/material";
import LoginRegister from "sections/login-register/LoginRegister";

function Navbar() {
  const { changeLang, lang } = useContext(LangContext);
  const currentLang = lang();
  const [loginOpen, setLoginOpen] = useState(false);
  const [navDialog, setNavDialog] = useState<NavDialogTypes>("login");
  const settings = useSelector(
    (state: { settings: SettingsStateType }) => state.settings
  );
  const getvalue = getValueByKey(settings);
  const { t } = useTranslation();
  const [navVisibilty, setNavVisibilty] = useState<"show" | "hide">("hide");

  function handleLoginClose() {
    setLoginOpen(false);
  }
  return (
    <>
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
          <li className="has-dropdown-on-hover">
            <span>الخدمات الالكترونية</span>
            <Paper className="menu">
              <MenuList sx={{ width: 200 }}>
                <MenuItem component={NavLink} to="/e-services/design">
                  التصاميم
                </MenuItem>
              </MenuList>
            </Paper>
          </li>
          {/* <li>
          <a
          className="lang-btn"
          role="button"
          onClick={() => {
            const current = lang();
            if (current === "en") changeLang("ar");
            else if (current === "ar") changeLang("en");
          }}
          >
          {currentLang === "ar" && "EN"}
          {currentLang === "en" && "العربية"}
          </a>
        </li> */}
        </ul>

        {/* <div className="left">
          <Button
            variant="contained"
            onClick={() => {
              setNavDialog("login");
              setLoginOpen(true);
            }}
            color="secondary"
          >
            تسجيل الدخول
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setNavDialog("register");
              setLoginOpen(true);
            }}
            color="secondary"
          >
            التسجيل
          </Button>
          <NavLink to={"/"} className="logo-link">
            <img src={logo} alt="" />
          </NavLink>
        </div> */}
      </nav>
      <LoginRegister
        type={navDialog}
        open={loginOpen}
        onClose={handleLoginClose}
      />
    </>
  );
}

type NavDialogTypes = "login" | "register";

export default Navbar;
