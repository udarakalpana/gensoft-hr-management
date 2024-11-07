import axios from "axios";
import {storeAuthUser} from "../../state/UserSignInSlice.js";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const userSignIn = createAsyncThunk(
    'authUser/login',
    async (loginDetails) => {
        return axios.get('/sanctum/csrf-cookie').then(() => {
        const response = axios.post('api/user-sign-in', loginDetails).then()
        return response.data
        });
    }
)
