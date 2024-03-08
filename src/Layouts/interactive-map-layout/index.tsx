import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/main";

function InteractiveMapLAyout() {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
    </Routes>
  );
}

export default InteractiveMapLAyout;
