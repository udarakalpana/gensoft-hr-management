import {createSlice} from "@reduxjs/toolkit";
import {userSignIn} from "../api/user/UserSignIn.js";

export const userSignInSlice = createSlice({
    name: 'authUser',
    initialState: {
        loading: false,
        auth: {},
        isAuthenticated: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userSignIn.pending, (state) => {
            state.loading = true
        })
            .addCase(userSignIn.rejected, (state, {payload}) => {
                console.log('reject', payload)
                state.error = payload
                state.loading = false
                state.isAuthenticated = false
            })
            .addCase(userSignIn.fulfilled, (state, {payload}) => {
                setStatePayloadDataWhenCaseFulfilled(payload, state)
        })
    }
})

const setStatePayloadDataWhenCaseFulfilled = (payload, state) => {
    if (!payload) {
        return
    }

    state.loading = false
    state.isAuthenticated = true
    state.auth = payload.data
}


export const {storeAuthUser} = userSignInSlice.actions

export default userSignInSlice.reducer
