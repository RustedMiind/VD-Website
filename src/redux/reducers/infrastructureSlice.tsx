import { createSlice } from "@reduxjs/toolkit";
import { Contract } from "types/Contract/Contract";

export type InfrastructureStateType = {
  contracts: Contract[];
  status: StatusType;
};

const initialState: InfrastructureStateType = {
  contracts: [],
  status: "error",
};

export const infraStructureSlice = createSlice({
  name: "infrastructure",
  initialState,
  reducers: {
    setInfrastructureProjects: (
      state,
      action: { payload: { contracts: Contract[] } }
    ) => {
      return { contracts: action.payload.contracts, status: "none" };
    },
    setInfrastructureProjectsLoading: (state) => {
      return { contracts: state.contracts, status: "loading" };
    },
    setInfrastructureProjectsError: (state) => {
      return { contracts: [], status: "error" };
    },
  },
});

export type StatusType = "loading" | "error" | "none";

export const {
  setInfrastructureProjects,
  setInfrastructureProjectsError,
  setInfrastructureProjectsLoading,
} = infraStructureSlice.actions;
export default infraStructureSlice.reducer;
