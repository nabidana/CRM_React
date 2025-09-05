import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import localeRedux from './LocaleRedux';
import dialogRedux from './DialogRedux';
import apiRedux from './ApiRedux';

export const store = configureStore({
    reducer : {
        locale : localeRedux,
        dialog : dialogRedux,
        api : apiRedux,
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware({ serializableCheck : false })
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useCRMDispatch = useDispatch.withTypes<RootDispatch>();
export const useCRMSelector = useSelector.withTypes<RootState>();