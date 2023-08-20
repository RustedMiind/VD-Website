import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { AboutResType, AboutType, setAbout } from "redux/reducers/aboutSlice";
import {
  KeyValue,
  createObjectFromKeyValueArray,
} from "methods/keyValToObject";

export function requestSetAbout(dispatch: Dispatch<AnyAction>) {
  console.log("Request Called");
  return new Promise((resolve, reject) => {
    axios
      .post<ApiResponse<AboutResType>>(api("client/about-page"))
      .then((res) => {
        dispatch(
          setAbout({
            ...res.data.data,
            settings: createObjectFromKeyValueArray(
              res.data.data.settings as KeyValue[]
            ),
          })
        );
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
