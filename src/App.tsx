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

axios.defaults.headers.common["from"] = "website";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] =
//   "https://visiondimensions.com/";
// axios.defaults.withCredentials = true;

const translationsEn = {
  test: "test",
  contact: {
    whatsapp: "Contact via Whatsapp",
    phone: "Contact via Phone",
    email: "Contact via Email",
  },
  project: {
    name: "Project Name",
    describtion: "Describtion",
    zone: "Work Zone",
    projects: "Projects",
  },
  vision: { name: "Vision Dimensions", for: "Engineering Consulting Company" },
  links: {
    home: "Home",
    projects: "Projects",
    login: "Login",
    services: "Services",
  },
};
const translationsAr = {
  test: "اختبار",
  contact: {
    whatsapp: "تواصل معنا عبر الواتس اب",
    phone: "تواصل معنا عبر الهاتف",
    email: "تواصل معنا عبر الايميل",
  },
  project: {
    name: "اسم المشروع",
    describtion: "الوصف",
    zone: "نطاق العمل",
    projects: "مشاريعنا",
  },
  vision: { name: "أبعاد الرؤية", for: "للاستشارات الهندسية" },
  links: {
    home: "الرئيسية",
    projects: "مشاريعنا",
    login: "تسجيل الدخول",
    services: "خدماتنا",
  },
};

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
    requestSetSettings(dispatch).then((res) => {
      console.log("res from disptatch", res);
    });
    console.log("Settings Requested");
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
