/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react";
import "./navbar.scss";
import { List } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { getValueByKey } from "types/SettingsType";
import logo from "assets/images/logo-vision.png";
import { navigationRoutes } from "methods/data/navigationRoutes";
import { changeLanguage } from "i18next";
import { LangContext } from "contexts/LangContext";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import LoginRegister from "sections/login-register/LoginRegister";
import { UserState, UserStateType } from "redux/reducers/userSlice";
import api from "methods/api";
import { logout } from "redux/middlewares/userMiddleware";
import { AuthContext } from "contexts/Auth";

function Navbar() {
  const { changeLang, lang } = useContext(LangContext);
  const currentLang = lang();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();

  const { settings, user } = useSelector(
    (state: { settings: SettingsStateType } & UserStateType) => ({
      settings: state.settings,
      user: state.user,
    })
  );

  const { t } = useTranslation();
  const [navVisibilty, setNavVisibilty] = useState<"show" | "hide">("hide");
  const { openLoginDialog, openRegisterDialog, closeDialog } =
    useContext(AuthContext);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log("user", user);

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
              <MenuList>
                <MenuItem component={NavLink} to="/e-services/design">
                  التصاميم
                </MenuItem>
                <MenuItem component={NavLink} to="/infrastructure_projects">
                  البنية التحتية
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

        {user.userState === UserState.NOT_USER && (
          <div className="left">
            <Button
              variant="contained"
              size="small"
              onClick={openLoginDialog}
              color="secondary"
            >
              تسجيل الدخول
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={openRegisterDialog}
              color="secondary"
            >
              التسجيل
            </Button>
            <NavLink to={"/"} className="logo-link">
              <img src={logo} alt="" />
            </NavLink>
          </div>
        )}
        {user.userState === UserState.USER && (
          <>
            <Tooltip title={"مرحبا, " + user.user?.name}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.user?.name} src={user.user?.image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={"user"} disabled>
                <Typography textAlign="center">
                  مرحبا, {user.user?.name}
                </Typography>
              </MenuItem>
              <MenuItem
                key={"setting"}
                onClick={() => {
                  handleCloseUserMenu();
                  logout(dispatch);
                }}
              >
                <Typography textAlign="center">تسجيل الخروج</Typography>
              </MenuItem>
            </Menu>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
