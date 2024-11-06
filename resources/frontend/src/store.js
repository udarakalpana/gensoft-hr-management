import { configureStore } from '@reduxjs/toolkit'
import userSignInSlice from "./utlities/state/UserSignInSlice.js";

export default configureStore({
    reducer: {
        user: userSignInSlice
    },
})
