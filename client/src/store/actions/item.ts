import {
  ITEMS_DROPPED,
  ITEMS_LOADED,
  ITEM_ADDED,
  ITEM_DELETED,
  // ITEM_EDITED,
  ITEM_ERROR,
  ITEM_LOADING,
} from "../constants/item";

export const itemAdded = (item: IItem) => {
  const action: ItemAction = {
    type: ITEM_ADDED,
    payload: item,
  };
  return action;
};
export const itemDeleted = (_id: number) => {
  const action: ItemAction = {
    type: ITEM_DELETED,
    payload: _id,
  };
  return action;
};
export const itemError = (error: string) => {
  const action: ItemAction = {
    type: ITEM_ERROR,
    payload: error,
  };
  return action;
};

export const itemsLoaded = (items: IItem[]) => {
  const action: ItemAction = {
    type: ITEMS_LOADED,
    payload: items,
  };
  return action;
};

export const itemsDropped = () => {
  const action: ItemAction = {
    type: ITEMS_DROPPED,
  };
  return action;
};

export const itemLoading = (isLoading: boolean) => {
  const action: ItemAction = {
    type: ITEM_LOADING,
    payload: isLoading,
  };
  return action;
};
