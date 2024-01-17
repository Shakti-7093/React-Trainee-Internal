import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slice/authSlice';
import CounterSlice from "./Slice/CounterSlice";
import FilterSlice from "./Slice/FilterSlice";
import taskReducer from "./Slice/taskSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: CounterSlice,
        filter: FilterSlice,
        tasks: taskReducer,
    },
});