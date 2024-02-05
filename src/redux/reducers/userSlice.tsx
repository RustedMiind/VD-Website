import { createSlice } from "@reduxjs/toolkit";
import { User } from "types/User";

export enum UserState {
  USER = "user",
  NOT_USER = "not_user",
  UNKNOWN = "unknown",
  LOADING = "loading",
}

const initialState: UserStateType = { user: { userState: UserState.UNKNOWN } };

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserStateType, action) => {
      return action.payload;
    },
  },
});

export type UserStateType = {
  user: {
    user?: User;
    userState: UserState;
  };
};

export const initalUser: UserStateType = {
  user: {
    userState: UserState.UNKNOWN,
  },
};

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
