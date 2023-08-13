import { createSlice } from "@reduxjs/toolkit";

export interface projectsStateType {
  projects: ProjectType[];
}

const initialState: projectsStateType = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state: projectsStateType, action) => {
      console.log("state from reducer: ", state);
      return action.payload.projects;
    },
  },
});

export type ProjectType = {
  id: number;
  name: string;
  title: string;
  description: string;
  link: string | null;
  "main-image": string;
  active: boolean;
  projectType: ProjectTypeType;
  project_type_id: number;

  media: [];
};

export type ProjectTypeType = {
  id: number;
  name: string;
  color: null;
  group: null;
};

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
