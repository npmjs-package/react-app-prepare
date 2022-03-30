import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
const mainSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppSelector = () => mainSelector(state => state)