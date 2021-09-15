import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, StoreType } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
