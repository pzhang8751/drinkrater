
import { configureStore } from "@reduxjs/toolkit";
import tagReducer from "@/lib/features/tagSlice"
import starReducer from "@/lib/features/starSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const makeStore = () => {
    return configureStore({
        reducer: {
            tagReducer, starReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector