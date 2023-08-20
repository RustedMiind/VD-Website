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
  console.log("Request Called");
  return new Promise((resolve, reject) => {
    axios
      .get<ApiResponse<ProjectType[]>>(api("client/company-projects"))
      .then((res) => {
        dispatch(setProjects({ projects: res.data.data }));
        resolve(res.data);
        console.log(res);
      })
      .catch((err) => {
        reject(err);
        dispatch(setProjectsError());
        console.log(err);
      });
  });
}
