import { createSlice } from "@reduxjs/toolkit";
import { SettingValueType } from "types/SettingsType";

export type SettingsStateType = SettingsType;

const initialState: SettingsStateType = [];
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state: SettingsStateType, action) => {
      return action.payload;
    },
    // setServicesError: (state: ServicesStateType) => {
    //   return "loading";
    // },
  },
});

export type SettingsType = SettingValueType[];

export const initialSettings: SettingsType = [
  {
    key: "name",
    value: "",
  },
];

export type ServicesType = SettingsType[] | "error" | "loading";

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
