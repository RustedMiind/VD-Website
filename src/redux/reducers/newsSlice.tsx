import { createSlice } from "@reduxjs/toolkit";

export type newsStateType = { news: NewsListType };

const initialState: newsStateType = { news: "loading" };

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (
      state: newsStateType,
      action: { payload: { news: NewsType[] } }
    ) => {
      return { news: action.payload.news };
    },
    setNewsError: (state) => {
      return { news: "error" };
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
  thumbnail: string;
  published_at: string;
};

export type NewsListType = NewsType[] | "error" | "loading";

export const { setNews, setNewsError } = newsSlice.actions;
export default newsSlice.reducer;
