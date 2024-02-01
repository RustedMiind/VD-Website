import { createSlice } from "@reduxjs/toolkit";

export enum UserState {
  USER = "user",
  NOT_USER = "not_user",
  UNKNOWN = "unknown",
  LOADING = "loading",
}

const initialState: UserStateType = { userState: UserState.UNKNOWN };

export const UserSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setUser: (state: UserStateType, action) => {
      return action.payload;
    },
  },
});

export type UserStateType = {
  user?: any;
  userState: UserState;
};

export const initalUser: UserStateType = {
  userState: UserState.UNKNOWN,
};

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
