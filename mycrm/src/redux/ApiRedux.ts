import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./IndexRedux";
import { MenuProps } from "antd";
import { meusList } from "../types/CustomTypes";

// type to const
const userMenuList : meusList[] = [];

const initialState = {
    userMenuList : userMenuList
}

export const ApiRedux = createSlice({
    name : "apiRedux",
    initialState,
    reducers : {
        
    },
    extraReducers : (builder) => {
        builder
        // .rejected : 실패 case
        .addCase(GetMenuItems.rejected, (state) => {
            state.userMenuList = [];
        })
        // .fulfilled : 성공 case
        .addCase(GetMenuItems.fulfilled, (state, action) => {
            state.userMenuList = [...action.payload]
        })
    }
});

export const { } = ApiRedux.actions;
export const SelectApi = ( state : RootState ) => state.api;
export default ApiRedux.reducer;

// Async functions
export const GetMenuItems = createAsyncThunk<meusList[], void>(
    'ApiRedux/GetMenuItems',
    async( _, {getState}) => {
        const sideMenuList : meusList[] = [
            {
                labelName : 'Dashboard',
                iconName : 'DashboardOutlined',
                linkName : 'index'
            },
            {
                labelName : 'Deals',
                iconName : 'DollarOutlined',
                linkName : 'deals'
            },
            {
                labelName : 'Projects',
                iconName : 'ProjectOutlined',
                linkName : 'projects'
            },
            {
                labelName : 'Schedules',
                iconName : 'ScheduleOutlined',
                linkName : 'schedules'
            }
        ];

        //

        return sideMenuList;
    }
    /* 실행하기전에 확인
    {
        condition : ({day}, {getState, extra}) => {
            const { fileList } = getState().filecon;
            let allChecks = false;
            day.forEach( (key) => {
                if( fileList[key] === undefined){
                    allChecks = true;
                }
            });
            return allChecks;
        }
    }
    */
)