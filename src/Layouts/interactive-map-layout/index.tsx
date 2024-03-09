import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/main";
import InteractiveMapPage from "./Pages/map";

function InteractiveMapLAyout() {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="map" element={<InteractiveMapPage />} />
    </Routes>
  );
}

export default InteractiveMapLAyout;
