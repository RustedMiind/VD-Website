import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import {
  ServiceType,
  setServices,
  setServicesError,
} from "redux/reducers/servicesSlice";

export function requestSetServices(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    axios
      .get<ApiResponse<ServiceType[]>>(api("client/service-page"))
      .then((res) => {
        dispatch(setServices({ services: res.data.data }));
        resolve(res.data);
      })
      .catch((err) => {
        dispatch(setServicesError());
        reject(err);
      });
  });
}
