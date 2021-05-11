import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;