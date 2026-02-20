import { createSlice } from '@reduxjs/toolkit';

// You MUST call the function createSlice( ... )
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
});

// Now .actions and .reducer exist
export const { increment, decrement } = counterSlice.actions;

// This is what your store imports
export default counterSlice.reducer;