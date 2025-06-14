import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./IndexRedux";

import enjson from '../locales/en/en.json';
import kojson from '../locales/ko/ko.json';
import { LocaleTypes } from "../types/CustomTypes";

const localeTypes : LocaleTypes = '';
const initialState = {
    locale : localeTypes,
    localeData : {},
}

export const LocaleRedux = createSlice({
    name : "localeRedux",
    initialState,
    reducers : {
        ChangeLocale : (state, action) => {
            const { locale } = action.payload;
            state.locale = locale;
        },
        SetLocaleJsonData : (state) => {
            
        }
    }
});

export const { ChangeLocale } = LocaleRedux.actions;
export const SelectLocale = (state : RootState ) => state.locale;
export default LocaleRedux.reducer;