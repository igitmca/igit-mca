'use client'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './User/slice.User';
import ToastControl from './Toast/control';
const store = configureStore({
    reducer: {
        user: userReducer,
        control:ToastControl
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;