import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./IndexRedux";
import { AuthTypes, userDataType, userType } from "../global/GlobalTypes";
import { loginAction } from "../global/AuthFun";

type initialStatetype = {
    userAuth : AuthTypes,
    userInfo : userDataType | undefined;
}

const initialState : initialStatetype = {
    userAuth : '',
    userInfo : undefined,
}

export const AuthRedux = createSlice({
    name : 'authRedux',
    initialState,
    reducers : {
        ResetInfo : (state) => {
            state.userAuth = '';
            state.userInfo = undefined;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(DoLogin.rejected, (state) => {
            state.userAuth = '';
        })
        .addCase(DoLogin.fulfilled, (state, action) => {
            const { auth, user } = action.payload;
            state.userAuth = auth;
            state.userInfo = user;
        })
    }
});

export const { } = AuthRedux.actions;
export const SelectAuth = ( state : RootState ) => state.auth;
export default AuthRedux.reducer;

export const DoLogin = createAsyncThunk<{auth : AuthTypes, user : userDataType}, userType>(
    'AuthRedux/DoLogin',
    async(user, {getState}) => {
        const result = await loginAction(user);
        const authType : AuthTypes = 'admin';
        const userDataDetail : userDataType = {
            key : '',
            id : '',
            name : '',
            auth : "admin",
            jobgrade : '',
            activestate : "active"
        }
        return {
            auth : authType,
            user : userDataDetail
        };
    }
)