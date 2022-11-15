import { createSlice } from "@reduxjs/toolkit";
import {nftFetchAction} from './action';

const initialState = {
  items: [],
  loading: false,
  error: {},
};

export const nftSlice = createSlice({
  name: "nft",
  initialState,
  // reducers: {
  //   nftFetch: (state) => {
  //     state.loading = true;
  //   },
  //   nftSuccess: (state, action) => {
  //     state.items = action.payload;
  //     state.loading = false;
  //   },
  //   nftFailure: (state, action) => {
  //     state.error = action.payload;
  //     state.loading = false;
  //   },
  // },
  extraReducers: {
    [nftFetchAction.pending.type]: (state, action) => {
      state.loading = true;
    },
    [nftFetchAction.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.items = action.payload.bundles;
      console.log(action.payload)
    },
    [nftFetchAction.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { nftFetch, nftSuccess, nftFailure, setCurrentPage } = nftSlice.actions;

export default nftSlice.reducer;
