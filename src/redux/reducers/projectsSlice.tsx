import { createSlice } from "@reduxjs/toolkit";
import { LanguagesObjectType } from "contexts/LangContext";

export interface projectsStateType {
  projects: ProjectsType;
}

const initialState: projectsStateType = {
  projects: "loading",
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state: projectsStateType, action) => {
      console.log("state from reducer: ", state);
      return action.payload.projects;
    },
    setProjectsError: (state) => {
      return { projects: "error" };
    },
  },
});

export type ProjectType = {
  id: number;
  name: LanguagesObjectType;
  title: LanguagesObjectType;
  description: LanguagesObjectType;
  link: string | null;
  "main-image": string;
  active: boolean;
  projectType: ProjectTypeType;
  project_type_id: number;
  media: [];
  workZones: WorkZoneType[];
  attachments: AttachmentType[];
};

export type AttachmentType = {
  path: string;
  size: string;
  type: string;
  original_name: string;
};

export type ProjectsType = ProjectType[] | "error" | "loading";

export type ProjectTypeType = {
  id: number;
  name: string;
  color: null;
  group: null;
};

export type WorkZoneType = {
  name: string;
  zone: string;
};
export const { setProjects, setProjectsError } = projectsSlice.actions;
export default projectsSlice.reducer;
