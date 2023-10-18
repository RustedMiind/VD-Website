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
import { store } from "./redux/store";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: blueGrey[900],
  //   },
  //   secondary: {
  //     main: pink[500],
  //   },
  //   background: {
  //     paper: grey[100],
  //     default: grey[300],
  //   },
  // },
  direction: "rtl",
  palette: {
    primary: {
      main: "#f19b02",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#004693",
      // main: colors.deepOrange[500],
    },
    background: {
      paper: "#FFFFFF",
      default: "#F1F1F1",
    },
    text: {
      primary: "#004693",
      secondary: colors.grey[600],
      disabled: "#444850",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // color: "#004693",
          fontFamily: "TheSans",
        },
      },
    },

    // MuiCssBaseline: {
    //   styleOverrides: `
    //     @font-face {
    //       font-family: 'TheSans';
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 400;
    //       src: local('TheSans'), local('TheSans-Regular'), url(${TheSansWoff2}) format('woff2');
    //       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //     }
    //   `,
    // },
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

    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
    // </React.Suspense>
  );
}

export default App;
