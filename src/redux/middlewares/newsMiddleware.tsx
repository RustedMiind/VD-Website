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
        const sorted = res.data.data.sort((f, s) => {
          return -1;
        });

        console.log("sorted", sorted);
        console.log("default", res.data.data);

        dispatch(setNews({ news: sorted }));
        resolve(sorted);
      })
      .catch((err) => {
        reject(err);
        dispatch(setNewsError());
      });
  });
}
