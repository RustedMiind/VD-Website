import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { SettingsType, setSettings } from "redux/reducers/settingsSlice";

export function requestSetSettings(dispatch: Dispatch<AnyAction>) {
  console.log("Settings Request Called");
  return new Promise((resolve, reject) => {
    axios
      .post<ApiResponse<SettingsType[]>>(api("client/setting"))
      .then((res) => {
        dispatch(setSettings(res.data.data));
        resolve(res.data);
        console.log("res.data.data ", res.data.data);
      })
      .catch((err) => {
        reject(err);
        // dispatch(setServicesError());
        console.log(err);
      });
  });
}
