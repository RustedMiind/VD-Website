import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/fonts/include.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import LangContextProvider from "contexts/LangContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <LangContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LangContextProvider>
  </BrowserRouter>
);
