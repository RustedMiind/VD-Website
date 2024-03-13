import axios from "axios";
import { Dispatch, AnyAction } from "redux";

import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { getElectronServicesLinks } from "redux/reducers/electronServicesLinksSlice";

export function requestGetElectronServicesLinks(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    axios
      .get<{ services: string[] }>(api("employee/electronic-services"))
      .then((data) => {
        console.log("ReduxMiddleware", data.data.services);
        dispatch(
          getElectronServicesLinks({
            electronServicesLinks: data.data.services,
          })
        );
        resolve(data.data.services);
      })
      .catch((err) => {
        reject(err);
        dispatch(getElectronServicesLinks({ electronServicesLinks: [] }));
      });
  });
}
