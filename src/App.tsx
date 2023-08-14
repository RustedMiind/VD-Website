import React from "react";
import Layout from "./pages/layout/Layout";
import "./app.scss";
import "./defaults.scss";
import axios from "axios";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LangContextProvider from "contexts/LangContext";

axios.defaults.headers.common["from"] = "website";

const translationsEn = { test: "test" };
const translationsAr = { test: "اختبار" };

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
