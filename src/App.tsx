import React, { useEffect, useContext } from "react";
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
// import "./App.scss";
// import * as colors from "@mui/material/colors";
import { ThemeProvider, colors, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const theme = createTheme({
  direction: "rtl",
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
      paper: "#FFFFFF",
      default: "#F1F1F1",
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
    console.log("useEffect on change lang ran", langContext);
    requestSetSettings(dispatch)
      .then((res) => {})
      .catch((err) => {});
  }, [lang]);
  return (
    // <React.Suspense fallback="Loading...">

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
    </LocalizationProvider>
    // </React.Suspense>
  );
}

export default App;
