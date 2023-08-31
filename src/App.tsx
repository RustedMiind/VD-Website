import React, { useEffect } from "react";
import Layout from "./pages/layout/Layout";
import "./app.scss";
import "./defaults.scss";
import axios from "axios";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LangContextProvider from "contexts/LangContext";
import { useDispatch } from "react-redux";
import { requestSetSettings } from "redux/middlewares/settingsMiddlware";
import "assets/styles/animate-css.min.css";
import "assets/styles/custom-onscroll-animations.scss";
import ArTranslation from "translate/ArTranslation";
import EnTranslation from "translate/EnTranslation";
axios.defaults.headers.common["from"] = "website";
axios.defaults.headers.common["lang"] = "ar";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["Access-Control-Allow-Methods"] = "*";

const translationsEn = EnTranslation;
const translationsAr = ArTranslation;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    ar: { translation: translationsAr },
  },
  lng: "ar",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetSettings(dispatch)
      .then((res) => {})
      .catch((err) => {});
  }, []);
  return (
    <React.Suspense fallback="Loading...">
      <LangContextProvider>
        <div className="App">
          <Layout />
        </div>
      </LangContextProvider>
    </React.Suspense>
  );
}

export default App;
