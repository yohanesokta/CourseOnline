import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userdataSlice {
    value : {
        username : string,
        user_email : string,
        profile_picture_url : string,
        role : string,
    } | any
}
const initialState:userdataSlice = {
    value : {}
}

export const userdataSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {
        setdata: (state, action : PayloadAction<object>) => {
            state.value = action.payload
        }
    }
})

export const { setdata } = userdataSlice.actions
export default userdataSlice.reducer