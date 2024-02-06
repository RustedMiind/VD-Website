import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import {
  setDesigns,
  setDesignsLoading,
  setDesignsError,
} from "redux/reducers/designsSlice";
import { Design } from "types/Design/Design";

export function requestSetDesigns(
  dispatch: Dispatch<AnyAction>,
  params?: unknown
): Promise<{
  designs: Design[];
  count: number;
}> {
  dispatch(setDesignsLoading({}));
  return new Promise((resolve, reject) => {
    axios
      .get<{ designs: Design[]; count: number }>(api("client/design"), {
        params,
      })
      .then((res) => {
        dispatch(setDesigns({ designs: res.data.designs }));
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
        dispatch(setDesignsError());
      });
  });
}
