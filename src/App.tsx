import React, { useEffect, useContext, useMemo } from "react";
import Layout from "./pages/layout/Layout";
import "./app.scss";
import "./app.css";
import "./defaults.scss";
import axios from "axios";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LangContextProvider, { LangContext } from "contexts/LangContext";
import { useDispatch } from "react-redux";
import { requestSetSettings } from "redux/middlewares/settingsMiddlware";
import "assets/styles/animate-css.min.css";
import "assets/styles/custom-onscroll-animations.scss";
import ArTranslation from "translate/ArTranslation";
import EnTranslation from "translate/EnTranslation";
import { getLangCookie } from "methods/getLangCookie";
import { SnackbarProvider } from "notistack";
// import "./App.scss";
// import * as colors from "@mui/material/colors";
import { ThemeProvider, colors, createTheme, Grow } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { checkUser } from "redux/middlewares/userMiddleware";
import AuthProvider from "contexts/Auth";
import "filepond/dist/filepond.min.css";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const translationsEn = EnTranslation;
const translationsAr = ArTranslation;

const currentLang = getLangCookie();

axios.defaults.headers.common["from"] = "website";
axios.defaults.headers.common["lang"] = currentLang === "ar" ? "ar" : "en";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    ar: { translation: translationsAr },
  },
  lng: currentLang,
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

function App() {
  const dispatch = useDispatch();
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  useEffect(() => {
    checkUser(dispatch);
    requestSetSettings(dispatch)
      .then((res) => {})
      .catch((err) => {});
  }, [lang]);

  const theme = useMemo(
    () =>
      createTheme({
        direction: langContext.lang() === "en" ? "ltr" : "ltr",
        shape: {
          borderRadius: 10,
        },
        palette: {
          primary: {
            main: "#f19b02",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: "#004693",
          },
          background: {
            default: "#FFFFFF",
            paper: "#F1F1F1",
          },
          text: {
            primary: "#004693",
            secondary: colors.grey[600],
            disabled: colors.grey[600],
          },
        },
        components: {
          MuiTypography: {
            styleOverrides: {
              root: {
                fontFamily: "TheSans",
              },
            },
          },
          MuiPaper: {
            defaultProps: { elevation: 4 },
          },
        },
        typography: {
          fontFamily: [
            "TheSans",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
      }),
    [langContext.lang()]
  );
  return (
    // <React.Suspense fallback="Loading...">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          transitionDuration={{ appear: 500, exit: 500, enter: 300 }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          TransitionComponent={Grow}
          variant="success"
          autoHideDuration={10000}
        >
          <AuthProvider>
            <DirectionProvider>
              <div className="App">
                <Layout />
              </div>
            </DirectionProvider>
          </AuthProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </LocalizationProvider>
    // </React.Suspense>
  );
}

const DirectionProvider = ({ children }: { children: React.ReactNode }) => {
  const langContext = useContext(LangContext);
  const lang = langContext.lang();

  const render = useMemo(() => {
    switch (lang) {
      case "en":
        return children;
      default:
        return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
    }
  }, [lang]);

  return render;
};

export default App;
