import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./reducers/projectsSlice";
import servicesSlice from "./reducers/servicesSlice";

export const store = configureStore({
  reducer: { projects: projectsSlice, services: servicesSlice },
});
