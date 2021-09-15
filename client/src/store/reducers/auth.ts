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
import { setCookie, getCookie } from "../utils";

const AUTH_INIT_STATE: IAuthState = {
  loading: false,
  error: null,
  user: null,
  isAuthenticated: false,
  token: getCookie("token"),
};

export const authReducer = (state = AUTH_INIT_STATE, action: AuthAction) => {
  switch (action.type) {
    case AUTH_LOADING: {
      const newState: IAuthState = {
        ...state,
        loading: action.payload,
      };
      return newState;
    }
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case USER_LOAD_ERROR: {
      console.log("error payload :", action.payload);
      const newState: IAuthState = {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };
      return newState;
    }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      setCookie("token", action.payload.token, 10);
      console.log({ ...action.payload });
      const newState: IAuthState = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
      return newState;
    }
    case USER_LOADED: {
      const newState: IAuthState = {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
      return newState;
    }
    case USER_LOGOUT_SUCCESS: {
      setCookie("token", undefined, 10);
      const newState: IAuthState = {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
      return newState;
    }

    default:
      return state;
  }
};
