import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: {},
};

export const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    nftFetch: (state) => {
      state.loading = true;
    },
    nftSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    nftFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { nftFetch, nftSuccess, nftFailure } = nftSlice.actions;

export default nftSlice.reducer;
