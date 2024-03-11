import { createSlice } from "@reduxjs/toolkit";
import { ProjectType } from "./projectsSlice";

export type MainStateType =
  | "error"
  | "loading"
  | {
      icons: IconsType;
      services: [];
      projects: ProjectType[];
      members: MembersType;
      file: string;
      main_description: string;
    };

const initialState: MainStateType = "loading";

export const mainSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setMain: (state: MainStateType, action) => {
      return action.payload.main;
    },
    // setServicesError: (state: ServicesStateType) => {
    //   return "loading";
    // },
  },
});

export type MainType = MainStateType;

export type IconsType = {
  icons: {
    id: Number;
    name: string;
    type: string;
    logo: string;
    link: string;
  }[];
  type: string;
};

export type MembersType = {
  id: number;
  name: string;
  job_title: string;
  bio: string;
  description: string;
  image: string;
}[];

export const initialService: MainType = {
  icons: {
    icons: [
      {
        id: 0,
        name: "string",
        type: "string",
        logo: "string",
        link: "string",
      },
    ],
    type: "string",
  },
  main_description: "string",
  services: [],
  projects: [
    {
      id: 1,
      name: "string",
      title: "string",
      description: "string",
      link: "string",
      "main-image": "string",
      active: true,
      projectType: { id: 1, name: "string", color: null, group: null },
      project_type_id: 1,
      media: [],
      workZones: [{ name: "string", zone: "string" }],
      attachments: [{ path: "" }],
    },
  ],
  members: [
    {
      id: 1,
      name: "string",
      job_title: "string",
      bio: "string",
      description: "string",
      image: "string",
    },
  ],
  file: "string",
};

export const { setMain } = mainSlice.actions;
export default mainSlice.reducer;
