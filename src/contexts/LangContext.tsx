import { setCookie } from "methods/cookies";
import { getLangCookie } from "methods/getLangCookie";
import { useState, createContext } from "react";
import axios from "axios";
import { changeLanguage } from "i18next";

const currentLang = getLangCookie();

export const LangContext = createContext<{
  lang: () => string;
  changeLang: (lang: LanguagesType) => void;
}>({
  lang: () => currentLang,
  changeLang: () => {},
});

function LangContextProvider({ children }: PropsType) {
  const [language, setLanguage] = useState<LanguagesType>(currentLang);
  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );

  function lang(): string {
    return language;
  }

  function changeLang(lang: LanguagesType) {
    changeLanguage(lang);
    setLanguage(lang);
    setCookie("lang", lang, 100);
    axios.defaults.headers.common["lang"] = lang === "ar" ? "ar" : "en";
  }
}

export type LanguagesObjectType = {
  ar: string;
  en: string;
};

type PropsType = { children: React.ReactNode };

export type LanguagesType = "ar" | "en";

export default LangContextProvider;
