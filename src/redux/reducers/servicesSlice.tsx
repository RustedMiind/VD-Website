import { createSlice } from "@reduxjs/toolkit";

export type ServicesStateType = {
  services: ServicesSectionsType | "error" | "loading";
};

const initialState: ServicesStateType = { services: "loading" };
export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state: ServicesStateType, action): ServicesStateType => {
      return { services: action.payload.services };
    },
    setServicesError: (): ServicesStateType => {
      return { services: "error" };
    },
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
  examples: ServiceExample[];
};

export type ServiceExample = {
  path: string;
  description: string;
};

export type ServicesSectionType = {
  title: string;
  description: string;
  design: string;
  services: ServiceType[];
};
export type ServicesSectionsType = ServicesSectionType[];

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
  examples: [],
};

// export type ServicesType = ServiceType[] | "error" | "loading";

export const { setServices, setServicesError } = servicesSlice.actions;
export default servicesSlice.reducer;
