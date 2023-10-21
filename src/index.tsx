import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/fonts/include.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import LangContextProvider from "contexts/LangContext";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <CacheProvider value={cacheRtl}>
      <LangContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </LangContextProvider>
    </CacheProvider>
  </BrowserRouter>
);
