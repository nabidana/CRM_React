import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./IndexRedux";
import { activeStateType, AuthTypes, userDataType, userType } from "../global/GlobalTypes";

type initialStatetype = {
    userList : userDataType[];
}

const initialState : initialStatetype = {
    userList : [],
}

export const AdminApiRedux = createSlice({
    name : 'adminApiRedux',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(GetUserItems.rejected, (state) => {
            state.userList = [];
        })
        .addCase(GetUserItems.fulfilled, (state, action) => {
            state.userList = action.payload;
        })
    }
});

export const { } = AdminApiRedux.actions;
export const SelectAdminApi = ( state : RootState ) => state.adminApi;
export default AdminApiRedux.reducer;

export const GetUserItems = createAsyncThunk<userDataType[], void, {state : RootState}>(
    'AdminApiRedux/GetUserItems',
    async( _, {getState} ) => {
        const { userAuth } = getState().auth;
        const userDataList : userDataType[] = [];

        const test1 : AuthTypes[] = ['', 'user', 'admin', 'guest'];
        const test2 : activeStateType[] = ['', 'active', 'enable', 'lock', 'wait'];
        for(let i = 0 ; i < 12; i++){
            userDataList.push({
                key : 'key'+i.toString(),
                id : 'Id-'+i.toString(),
                name : 'Name-'+i.toString(),
                auth : test1[ (i%4) ],
                jobgrade : '',
                activestate : test2[ (i%5)],
            })
        }

        return userDataList;
    },
    // 메인 함수 실행전에 동작함
    {
        condition : ( _, {getState, extra}) => {
            const { userAuth } = getState().auth;
            return userAuth === 'admin' ? true : false;
        }
    }
)