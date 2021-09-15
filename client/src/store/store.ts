import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import { itemReducer } from "./reducers/item";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const rootReducer = combineReducers({
  item: itemReducer,
  auth: authReducer,
});

export const store: Store<any, ItemAction> & { dispatch: DispatchType } =
  createStore(rootReducer, composedEnhancer);

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
