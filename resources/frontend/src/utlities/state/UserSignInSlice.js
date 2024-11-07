import {createSlice} from "@reduxjs/toolkit";

export const userSignInSlice = createSlice({
    name: 'authUser',
    initialState: {
        auth: {},
        isAuthenticated: false
    },
    reducers: {},
    extraReducers: {

    }
})


export const {storeAuthUser} = userSignInSlice.actions

export default userSignInSlice.reducer
