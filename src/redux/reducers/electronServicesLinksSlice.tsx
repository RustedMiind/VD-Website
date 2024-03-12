import { createSlice } from "@reduxjs/toolkit";

export interface electronServicesLinksType {
  electronServicesLinks: string[];
}

const initialState: electronServicesLinksType = {
  electronServicesLinks: [],
};

export const electronServicesLinksSlice = createSlice({
  name: "electronServicesLinks",
  initialState,
  reducers: {
    getElectronServicesLinks: (state: electronServicesLinksType, action) => {
      return action.payload;
    }
  },
});

export const { getElectronServicesLinks } = electronServicesLinksSlice.actions;
export default electronServicesLinksSlice.reducer;
