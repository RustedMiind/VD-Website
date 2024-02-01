import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import { setNewsError } from "redux/reducers/newsSlice";
import { setDesigns } from "redux/reducers/designsSlice";
import { Design } from "types/Design/Design";

export function requestSetDesigns(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    axios
      .get<{ designs: Design[] }>(api("client/design"))
      .then((res) => {
        dispatch(setDesigns({ designs: res.data.designs }));
        resolve(res.data.designs);
      })
      .catch((err) => {
        reject(err);
        dispatch(setNewsError());
      });
  });
}
