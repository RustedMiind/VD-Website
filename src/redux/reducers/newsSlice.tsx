import { createSlice } from "@reduxjs/toolkit";

export type newsStateType = NewsListType | "loading" | "error";

const initialState: newsStateType = "loading";

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state: newsStateType, action) => {
      console.log("state from reducer: ", state);
      return action.payload.news;
    },
    setNewsError: (state) => {
      return "loading";
    },
  },
});

export type NewsType = {
  id: number;
  title: string;
  content: string;
  category_id: number;
  category: string;
  image: string;
  published_at: string;
};

export type NewsListType = NewsType[];

export const { setNews, setNewsError } = newsSlice.actions;
export default newsSlice.reducer;
