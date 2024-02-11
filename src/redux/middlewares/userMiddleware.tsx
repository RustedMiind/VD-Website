import axios from "axios";
import api from "methods/api";
import { getCookie, setCookie } from "methods/cookies";
import { Dispatch, AnyAction } from "redux";
import { UserState, setUser } from "redux/reducers/userSlice";
import ApiResponse from "types/ApiResponse";
import { User } from "types/User";

const tokenCookieName = "jwt";

export function setUserState(
  { user }: { user: User },
  dispatch: Dispatch<AnyAction>
) {
  dispatch(
    setUser({
      user,
      userState: UserState.USER,
    })
  );
}

export function setNotUserState(dispatch: Dispatch<AnyAction>) {
  dispatch(
    setUser({
      user: undefined,
      userState: UserState.NOT_USER,
    })
  );
}

export function setLoadingUserState(dispatch: Dispatch<AnyAction>) {
  dispatch(
    setUser({
      user: undefined,
      userState: UserState.LOADING,
    })
  );
}

export function setTokenCookie(token: string) {
  setCookie(tokenCookieName, token, 28);
  setAuthHeaders(token);
}

export function deleteTokenCookie() {
  setCookie(tokenCookieName, "To Delete", 0.00001);
}

export function getTokenCookie() {
  return getCookie(tokenCookieName);
}

export function setAuthHeaders(token?: string) {
  const tokenCookie = getTokenCookie();
  console.log("tokenCookie ", tokenCookie);
  axios.defaults.headers.common.Authorization = `Bearer  ${
    token ? token : tokenCookie
  }`;
}

export function checkUser(dispatch: Dispatch<AnyAction>) {
  setLoadingUserState(dispatch);
  setAuthHeaders();
  axios
    .post<ApiResponse<User>>(api("client/user"))
    .then(({ data }) => {
      console.log("profile", data);
      setUserState({ user: data.data }, dispatch);
    })
    .catch((err) => {
      setNotUserState(dispatch);
    });
}

export function logout(dispatch: Dispatch<AnyAction>) {
  setNotUserState(dispatch);
  deleteTokenCookie();
  axios.defaults.headers.common.Authorization = null;
}
