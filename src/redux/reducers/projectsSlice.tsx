import { createSlice } from "@reduxjs/toolkit";

export interface projectsStateType {
  projects: ProjectsType;
  projectTypes: ProjectTypeType[];
}

const initialState: projectsStateType = {
  projects: "loading",
  projectTypes: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state: projectsStateType, action) => {
      return action.payload.projects;
    },
    setProjectsError: (state) => {
      return { ...state, projects: "error" };
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
  workZones: WorkZoneType[];
  attachments: AttachmentType[];
};

export type AttachmentType = {
  path: string;
  describtion?: string;
};

export type ProjectsType = ProjectType[] | "error" | "loading";
export type ProjectsListType = ProjectType[];

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
