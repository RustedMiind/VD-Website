import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import {
  ServiceType,
  setServices,
  // setServicesError,
} from "redux/reducers/servicesSlice";

export function requestSetServices(dispatch: Dispatch<AnyAction>) {
  console.log("Services Request Called");
  return new Promise((resolve, reject) => {
    axios
      .get<ApiResponse<ServiceType[]>>(api("client/services/"))
      .then((res) => {
        dispatch(setServices({ services: res.data.data }));
        resolve(res.data);
        console.log(res);
      })
      .catch((err) => {
        reject(err);
        // dispatch(setServicesError());
        console.log(err);
      });
  });
}
