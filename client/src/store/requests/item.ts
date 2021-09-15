import {
  itemAdded,
  itemsLoaded,
  itemError,
  itemLoading,
  itemDeleted,
} from "../actions/item";
import { clientAPI } from "../../api/apiClient";
import { request } from "../../api/apiClient";
import { setConfig } from "../utils";
import { AppDispatch, StoreType } from "../store";

export const fetchItems = async (
  dispatch: AppDispatch,
  getStore: StoreType
) => {
  dispatch(itemLoading(true));
  const response = await clientAPI.item
    .getItems()
    .then((res) => res.data)
    .catch((err) => dispatch(itemError(err)));
  dispatch(itemsLoaded(response));
  dispatch(itemLoading(false));
};

export const saveItem =
  (item) => async (dispatch: AppDispatch, getState: StoreType) => {
    dispatch(itemLoading(true));

    const body = JSON.stringify({
      name: item.name,
      date: new Date().toLocaleDateString(),
    });

    const response = await request
      .post("/items", body, setConfig(getState))
      .then((res) => res.data)
      .catch((err) => dispatch(itemError(JSON.stringify(err))));
    console.log(response);
    dispatch(itemAdded(response));
    dispatch(itemLoading(false));
  };

export const deleteItem =
  (id) => async (dispatch: AppDispatch, getState: StoreType) => {
    dispatch(itemLoading(true));
    const response = await request
      .delete(`items/${id}`, setConfig(getState))
      .then((res) => res.data)
      .catch((err) => dispatch(itemError(JSON.stringify(err))));
    console.log(response);
    dispatch(itemDeleted(id));
    dispatch(itemLoading(false));
  };
