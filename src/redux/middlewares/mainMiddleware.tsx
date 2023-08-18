import axios from "axios";
import { Dispatch, AnyAction } from "redux";

import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { MainType, setMain } from "redux/reducers/mainSlice";

export function requestSetMain(dispatch: Dispatch<AnyAction>) {
  console.log("Request Called");
  return new Promise((resolve, reject) => {
    axios
      .post<ApiResponse<MainType>>(api("client/main-page/"))
      .then((res) => {
        dispatch(setMain({ main: res.data.data }));
        resolve(res.data);
        console.log(res);
      })
      .catch((err) => {
        reject(err);
        // dispatch(setProjectsError());
        console.log(err);
      });
  });
}
