import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";


export const createAd = createAsyncThunk("/ad/creatAd",
    async ({ ad_path }, { rejectWithValue }) => {  // thunkAPI에서 rejectWithValue를 가져옴
        try{
            const res = await api.post("/ad",{ad_path})
            console.log("ad",res)
            return res.data.data;
        }
        catch(error){
            return rejectWithValue(error.error);
        }
    }
)