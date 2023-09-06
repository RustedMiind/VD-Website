import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { NewsType, setNews, setNewsError } from "redux/reducers/newsSlice";

export function requestSetNews(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    axios
      .get<ApiResponse<NewsType[]>>(api("client/news"))
      .then((res) => {
        dispatch(setNews({ news: res.data.data }));
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
        dispatch(setNewsError());
      });
  });
}
