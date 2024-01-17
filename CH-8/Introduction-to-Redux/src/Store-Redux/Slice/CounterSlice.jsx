import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.value += 1;
        },
        decrementCount: (state) => {
            state.value -= 1;
        },
        resetCount: (state) => {
            state.value = initialState.value;
        }
    }

})

export const { incrementCount, decrementCount, resetCount } = CounterSlice.actions ;
export default CounterSlice.reducer;