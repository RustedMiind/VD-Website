import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./reducers/projectsSlice";

export const store = configureStore({
  reducer: { projects: projectsSlice },
});
