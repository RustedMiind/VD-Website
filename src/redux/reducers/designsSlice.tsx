import { createSlice } from "@reduxjs/toolkit";
import { Design } from "types/Design/Design";

export type designsStateType = { designs: designsListType };

const initialState: designsStateType = { designs: "none" };

export const designsSlice = createSlice({
  name: "designs",
  initialState,
  reducers: {
    setDesigns: (
      state: designsStateType,
      action: { payload: { designs: Design[] } }
    ) => {
      return { designs: action.payload.designs };
    },
    setNewsError: (state) => {
      return { designs: "error" };
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

export type designsListType = Design[] | "error" | "loading" | "none";

export const { setDesigns, setNewsError } = designsSlice.actions;
export default designsSlice.reducer;
