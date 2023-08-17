import { createSlice } from "@reduxjs/toolkit";

export type ServicesStateType = ServicesType;

const initialState: ServicesStateType = "loading";
export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state: ServicesStateType, action) => {
      console.log("state from reducer: ", state);
      return action.payload.services;
    },
    // setServicesError: (state: ServicesStateType) => {
    //   return "loading";
    // },
  },
});

export type ServiceType = {
  id: number;
  name: string;
  title: string;
  description: string;
  link: string | null;
  details: string | null;
  image: string;
  category_id: number;
  order_id: number;
};

export const initialService: ServiceType = {
  id: 0,
  name: "Loading...",
  title: "Loading...",
  description: "Loading...",
  link: "Loading...",
  details: "Loading...",
  image: "Loading...",
  category_id: 0,
  order_id: 0,
};

export type ServicesType = ServiceType[] | "error" | "loading";

export const { setServices } = servicesSlice.actions;
export default servicesSlice.reducer;
