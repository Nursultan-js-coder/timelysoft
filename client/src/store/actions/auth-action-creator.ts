import {
  AUTH_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOAD_ERROR,
  USER_LOADED,
  USER_LOGOUT_SUCCESS,
} from "../constants/auth";

type actionCreator = (args?: any) => AuthAction;

export const userRegistered = (payload: any) => {
  return { type: REGISTER_SUCCESS, payload };
};
export const userLoggedIn: actionCreator = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const userLoginError: actionCreator = (payload) => {
  return { type: LOGIN_ERROR, payload };
};
export const loading: actionCreator = (payload) => {
  return { type: AUTH_LOADING, payload };
};
export const userRegisterError: actionCreator = (payload) => {
  return { type: REGISTER_ERROR, payload };
};
export const userLoaded: actionCreator = (payload) => {
  return { type: USER_LOADED, payload };
};
export const userLoadError: actionCreator = (payload) => {
  return { type: USER_LOAD_ERROR, payload };
};
export const userLoggedOut: actionCreator = () => {
  return { type: USER_LOGOUT_SUCCESS };
};
