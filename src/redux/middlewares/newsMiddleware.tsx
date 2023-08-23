import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { NewsListType, setNews, setNewsError } from "redux/reducers/newsSlice";

export function requestSetNews(dispatch: Dispatch<AnyAction>) {
  console.log("Get News Request Called");
  return new Promise((resolve, reject) => {
    axios
      .get<ApiResponse<NewsListType>>(api("client/news"))
      .then((res) => {
        dispatch(setNews({ news: res.data.data }));
        resolve(res.data);
        console.log(res);
      })
      .catch((err) => {
        reject(err);
        dispatch(setNewsError());
        console.log(err);
      });
  });
}
