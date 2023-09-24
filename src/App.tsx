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
    <React.Suspense fallback="Loading...">
      <div className="App">
        <Layout />
      </div>
    </React.Suspense>
  );
}

export default App;
