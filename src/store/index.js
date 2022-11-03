import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./nftSlice";
import nftDetailReducer from './nftDetailSlice';

const store = configureStore({
  reducer: {
    nft: nftReducer,
    detail: nftDetailReducer,
  },
});

export default store;
