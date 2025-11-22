import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./IndexRedux";
import { MenuProps } from "antd";
import { menuGroupList, meusList } from "../global/GlobalTypes";

// type to const
const userMenuList : menuGroupList[] = [];

const initialState = {
    sessionId : '',
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
export const GetMenuItems = createAsyncThunk<menuGroupList[], void>(
    'ApiRedux/GetMenuItems',
    async( _, {getState}) => {
        const sideMenuList : menuGroupList[] = [
            {
                keyName : 'None',
                labelName : 'None',
                childList : [],
                element : {
                    labelName : 'Dashboard',
                    iconName : 'DashboardOutlined',
                    linkName : 'index'
                },
            },
            {
                keyName : 'mains',
                labelName : 'MainMenu',
                childList : [
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
                ]
            },
            {
                keyName : 'subs',
                labelName : 'SubMenu',
                childList : []
            },
            {
                keyName : 'admins',
                labelName : 'AdminMenu',
                childList : [
                    {
                        labelName : 'UserManagement',
                        iconName : 'UserSwitchOutlined',
                        linkName : 'UserManagement',
                    }
                ]
            }
        ]
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

export const GetSessionReady = createAsyncThunk<string, void>(
    'ApiRedux/GetSessionReady',
    async( _, {getState}) => {

        return '';
    }
)