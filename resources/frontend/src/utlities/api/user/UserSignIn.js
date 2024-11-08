import axios from "axios";
import {storeAuthUser} from "../../state/UserSignInSlice.js";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const userSignIn = createAsyncThunk(
    'authUser/login',
    async ({loginDetails, setError}) => {
        // console.log(loginDetails)
        return axios.get('/sanctum/csrf-cookie').then(() => {
        return  axios.post('api/user-sign-in', loginDetails).then((response) => {

            if (response.data.status === 401) {
                setError(response.data)
                return
            }
            return response
            })
        });
    }
)
