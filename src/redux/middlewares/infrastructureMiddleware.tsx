import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import { Contract } from "types/Contract/Contract";
import {
  setInfrastructureProjects,
  setInfrastructureProjectsError,
  setInfrastructureProjectsLoading,
} from "redux/reducers/infrastructureSlice";

export function requestSetInfrastrucureProjects(
  dispatch: Dispatch<AnyAction>,
  params?: unknown
): Promise<Contract[]> {
  dispatch(setInfrastructureProjectsLoading());
  return new Promise((resolve, reject) => {
    axios
      .get<{ data?: Contract[] }>(api("employee/contract"), {
        params,
      })
      .then(({ data }) => {
        dispatch(setInfrastructureProjects({ contracts: data.data || [] }));
        resolve(data.data || []);
      })
      .catch((err) => {
        dispatch(setInfrastructureProjectsError());
        reject(err);
      });
  });
}
