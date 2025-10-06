import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./IndexRedux";
import { dayDataType } from "../routes/pages/Schedule/SchedulesTypes";

const dayDataList : dayDataType[] = [];

const initialState = {
    dialogType : '',
    visible : false,
    items : dayDataList,
}

export const DialogRedux = createSlice({
    name : "dialogRedux",
    initialState,
    reducers : {
        OpenDialog : (state, action) => {
            console.log(action);
            const { modalType, items } = action.payload;
            state.visible = true;
            state.dialogType = modalType;
            state.items = items;
        },
        CloseDialog : (state) => {
            state.visible = false;
            state.dialogType = '';
            state.items = [];
        }
    }
});

export const { OpenDialog, CloseDialog } = DialogRedux.actions;
export const SelectDialog = (state : RootState ) => state.dialog;
export default DialogRedux.reducer;
/*
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./StoreIndex";

const initialState = {
    modalType : '',
    mode : '',
    visible : false,
    title : '',
    content : '',
    vals : '',
    okay(T?:any, T2?:any){},
    nookay(){},
    data : <any>[],
}

export const DialogRedux = createSlice({
    name : "dialogRedux",
    initialState,
    reducers : {
        OpenModal : (state, action) => {
            const { modalType, mode, title, content, vals, okay, nookay, data} = action.payload;
            state.modalType = modalType;
            state.mode = mode;
            state.title = title;
            state.content = content;
            state.visible = true;
            state.vals = vals;
            state.okay = okay;
            state.nookay = nookay;
            state.data = data;
            // console.log(state);
        },
        CloseModal : (state) => {
            state.modalType = '';
            state.mode = '';
            state.visible = false;
            state.title = '';
            state.content = '';
            state.vals = '';
            state.okay = () => {};
            state.nookay = () => {};
            state.data = <any>[];
        }
    }
});

export const { OpenModal, CloseModal } = DialogRedux.actions;
export const SelectModal = (state : RootState) => state.dialog;
export default DialogRedux.reducer;
*/