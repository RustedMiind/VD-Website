import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./reducers/projectsSlice";
import servicesSlice from "./reducers/servicesSlice";
import settingsSlice, { SettingsStateType } from "./reducers/settingsSlice";
import mainSlice, { MainStateType } from "./reducers/mainSlice";
import aboutSlice from "./reducers/aboutSlice";
import newsSlice from "./reducers/newsSlice";
import designsSlice from "./reducers/designsSlice";
import userSlice from "./reducers/userSlice";
import infrastructureSlice from "./reducers/infrastructureSlice";

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    services: servicesSlice,
    settings: settingsSlice,
    main: mainSlice,
    news: newsSlice,
    about: aboutSlice,
    designs: designsSlice,
    user: userSlice,
    infrastructure: infrastructureSlice,
  },
});

type BaseState = ReturnType<typeof store.getState>;

export type RootState = Omit<BaseState, "main" | "about"> & {
  main: MainStateType;
  settings: SettingsStateType;
};

export type AppDispatch = typeof store.dispatch;
