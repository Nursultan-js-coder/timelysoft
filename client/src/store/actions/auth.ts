import { request } from "../../api/apiClient";
import {
  userRegistered,
  loading,
  userRegisterError,
  userLoggedIn,
  userLoginError,
  userLoadError,
  userLoaded,
} from "./auth-action-creator";
import { setConfig } from "../utils";
import { AppDispatch, StoreType } from "../store";

export const registerUser =
  ({ name, email, password }: IUser) =>
  (dispatch: AppDispatch, getState: StoreType) => {
    dispatch(loading(true));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    request
      .post("/auth/register", body, config)
      .then((res) => res.data)
      .then((user) => {
        dispatch(userRegistered(user));
      })
      .catch((err) => {
        dispatch(userRegisterError(JSON.stringify(err.msg)));
      })
      .finally(() => {
        dispatch(loading(false));
      });
  };

export const loginUser =
  ({ email, password }: IUser) =>
  (dispatch: AppDispatch, getState: StoreType) => {
    dispatch(loading(true));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });

    request
      .post("/auth/login", body, config)
      .then((res) => res.data)
      .then((user) => {
        dispatch(userLoggedIn(user));
      })
      .catch((err) => {
        console.log("error in action :", err.msg);
        dispatch(userLoginError(JSON.stringify(err.msg)));
      })
      .finally(() => {
        dispatch(loading(false));
      });
  };
export const loadUser = () => (dispatch: AppDispatch, getState: StoreType) => {
  dispatch(loading(true));
  request
    .get("/auth/user", setConfig(getState))
    .then((res) => res.data)
    .then((user) => {
      dispatch(userLoaded(user));
    })
    .catch((err) => {
      dispatch(userLoadError(JSON.stringify(err)));
    })
    .finally(() => {
      dispatch(loading(false));
    });
};
