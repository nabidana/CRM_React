import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./IndexRedux";
import { AuthTypes, userType } from "../global/GlobalTypes";
import { loginAction } from "../global/AuthFun";

type initialStatetype = {
    userAuth : AuthTypes,
}

const initialState : initialStatetype = {
    userAuth : ''
}

export const AuthRedux = createSlice({
    name : 'authRedux',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(DoLogin.rejected, (state) => {
            state.userAuth = '';
        })
        .addCase(DoLogin.fulfilled, (state, action) => {
            state.userAuth = action.payload;
        })
    }
});

export const { } = AuthRedux.actions;
export const SelectAuth = ( state : RootState ) => state.auth;
export default AuthRedux.reducer;

export const DoLogin = createAsyncThunk<AuthTypes, userType>(
    'AuthRedux/DoLogin',
    async(user, {getState}) => {
        const result = await loginAction(user);
        const authType : AuthTypes = 'admin';
        return authType;
    }
)