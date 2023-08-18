import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./reducers/projectsSlice";
import servicesSlice from "./reducers/servicesSlice";
import settingsSlice from "./reducers/settingsSlice";
import mainSlice from "./reducers/mainSlice";

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    services: servicesSlice,
    settings: settingsSlice,
    main: mainSlice,
  },
});
