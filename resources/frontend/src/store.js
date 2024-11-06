import { configureStore } from '@reduxjs/toolkit'
import userSignInSlice from "./utlities/state/UserSignInSlice.js";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userSignInSlice)


export const store = configureStore({
    reducer: {
        user: persistedReducer
    },
})

export const persistor = persistStore(store)