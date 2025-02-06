import { configureStore } from "@reduxjs/toolkit";
import userdataReducer from "./utility/slice";

export const store =  configureStore({
    reducer : {
        userdata : userdataReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store