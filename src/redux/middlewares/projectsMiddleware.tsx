import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import {
  ProjectType,
  setProjects,
  setProjectsError,
} from "../reducers/projectsSlice";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";

export function requestSetProjects(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    axios
      .get<ApiResponse<ProjectType[]>>(api("client/company-projects"))
      .then((res) => {
        dispatch(setProjects({ projects: res.data.data }));
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
        dispatch(setProjectsError());
      });
  });
}
