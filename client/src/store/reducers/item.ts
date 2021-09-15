import { v4 } from "uuid";
import {
  ITEMS_DROPPED,
  ITEMS_LOADED,
  ITEM_ADDED,
  ITEM_DELETED,
  ITEM_EDITED,
  ITEM_ERROR,
  ITEM_LOADING,
} from "../constants/item";

const initState: ItemState = {
  loading: false,
  error: null,
  entities: [],
};

export const itemReducer = (
  state: ItemState = initState,
  action: ItemAction
) => {
  switch (action.type) {
    case ITEM_ADDED: {
      const newState: ItemState = {
        ...state,
        entities: [...state.entities, { ...action.payload }],
      };
      console.log("new state:", newState);
      console.log("action:", action);
      return newState;
    }

    case ITEM_DELETED: {
      const newState: ItemState = {
        ...state,
        entities: state.entities.filter((item) => item._id !== action.payload),
      };
      return newState;
    }
    case ITEMS_LOADED: {
      const newState: ItemState = {
        ...state,
        entities: [...state.entities, ...action.payload],
      };
      return newState;
    }
    case ITEM_LOADING: {
      const newState: ItemState = {
        ...state,
        loading: action.payload,
      };
      return newState;
    }
    case ITEM_ERROR: {
      const newState: ItemState = {
        ...state,
        error: action.payload,
      };
      return newState;
    }
    case ITEMS_DROPPED: {
      const newState: ItemState = {
        ...state,
        entities: [],
      };
      return newState;
    }
    default:
      return state;
  }
};
