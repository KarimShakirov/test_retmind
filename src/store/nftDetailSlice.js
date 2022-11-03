import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {},
    loading: false,
    error: {},
};

export const nftDetailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        nftDetailFetch: (state) => {
            state.loading = true;
        },
        nftDetailSuccess: (state, action) => {
            state.cards = action.payload;
            state.loading = false;
        },
        nftDetailFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const {nftDetailFailure, nftDetailFetch, nftDetailSuccess} = nftDetailSlice.actions;

export default nftDetailSlice.reducer;