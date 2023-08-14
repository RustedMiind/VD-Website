import { useState, createContext, Dispatch, SetStateAction } from "react";

export const LangContext = createContext<{
  lang: (data: LanguagesObjectType | undefined) => string;
  changeLang: (lang: LanguagesType) => void;
}>({
  lang: (data: LanguagesObjectType | undefined) => "ar",
  changeLang: () => {},
});

function LangContextProvider({ children }: PropsType) {
  const [language, setLanguage] = useState<LanguagesType>("ar");

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );

  function lang(data: LanguagesObjectType | undefined): string {
    return data ? data[language] : "";
  }

  function changeLang(lang: LanguagesType) {
    if (lang === "ar" || lang === "en") {
      setLanguage(lang);
    }
  }
}

export type LanguagesObjectType = {
  ar: string;
  en: string;
};

type PropsType = { children: React.ReactNode };

export type LanguagesType = "ar" | "en";

export default LangContextProvider;
