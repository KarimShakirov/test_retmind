import {createAsyncThunk} from "@reduxjs/toolkit";
import {getNft, getNftOffset} from "../api";

export const nftFetchAction = createAsyncThunk('nftFetch', async(page, thunkAPI) => {
    try {
        const response = await getNftOffset(page - 1)
        return response;
    }
    catch (e) {
        thunkAPI.rejectWithValue(e.message)
    }
})