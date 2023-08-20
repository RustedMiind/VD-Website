import { createSlice } from "@reduxjs/toolkit";
import { KeyValue } from "methods/keyValToObject";

export type AboutStateType = AboutType | "loading" | "error";

const initialState: AboutStateType = "loading";
export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setAbout: (state: AboutStateType, action) => {
      console.log("state from reducer: ", state);
      return action.payload;
    },
    // setServicesError: (state: ServicesStateType) => {
    //   return "loading";
    // },
  },
});

// export const initialAbout: AboutType = {
//   about_page_icons: "string",
//   about_us: "string",
//   vision: "string",
//   goal: "string",
//   slogan: "string",
//   about_page_image: ["string"],
//   projects: [
//     {
//       ar: "string",
//       num: "5",
//     },
//   ],
//   files: ["string"],
// };

export interface AboutResType {
  icons: Icons;
  projects: ProjectsEntity[];
  partners: PartnersEntity[];
  settings: KeyValue[];
}
export interface AboutType {
  icons: Icons;
  projects: ProjectsEntity[];
  partners: PartnersEntity[];
  settings: AboutSettings;
}
export interface Icons {
  icons: IconType[];
  type: string;
}
export type IconType = {
  id: 1;
  name: string;
  type: string;
  logo: string;
  link: string;
};
export interface ProjectsEntity {
  name: string;
  num: string;
}
export interface PartnersEntity {
  id: number;
  name: string;
  type: string;
  logo: string;
  link: string;
}
export interface AboutSettings {
  about_us: string;
  vision: string;
  goal: string;
  slogan: string;
  about_page_image?: string[] | null;
  files?: string[] | null;
}

// export interface AboutType {
//   about_page_icons: string;
//   about_us: string;
//   vision: string;
//   goal: string;
//   slogan: string;
//   about_page_image?: string[] | null;
//   projects?: ProjectsEntity[] | null;
//   files?: string[] | null;
// }
export interface ProjectsEntity {
  name: string;
  num: string;
}
export type ServicesType = AboutType | "error" | "loading";

export const { setAbout } = servicesSlice.actions;
export default servicesSlice.reducer;
