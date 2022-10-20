import { configureStore } from "@reduxjs/toolkit";
//import { getUsersFetch } from "../action/getUsersFetch";
import userSlice from './../redux/userSlice';
import { loggerEnhancer } from './../../miblleWare/thunkEnhancer';
import { logger } from './../../miblleWare/loggerWare';
import loginSlice from './../redux/loginSlice';
import messageSlice from "../redux/messageSlice";

export const store = configureStore({
    reducer: {
        user:userSlice,
        login:loginSlice,
        message:messageSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerEnhancer,logger)
  });