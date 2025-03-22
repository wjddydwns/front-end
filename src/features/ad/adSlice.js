import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

// 광고 생성 Thunk
export const createAd = createAsyncThunk(
  "/ad/createAd",
  async ({ ad_path }, { rejectWithValue }) => {
    try {
      const res = await api.post("/ad", { ad_path });
      // console.log("ad", res);
      return res.data; // 응답 데이터 반환
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error occurred");
    }
  }
);

// 광고 리스트 조회 Thunk
export const getAdList = createAsyncThunk(
  "/ad/getAdList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/ad/getad"); // URL 수정
      // console.log("ads", res.data.ads)
      return res.data.ads || []; // 응답 구조가 다를 경우 대비하여 안전 처리
    
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching ads");
    }
  }
);

// Redux Slice
const adSlice = createSlice({
  name: "ad",
  initialState: {
    ads: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdList.fulfilled, (state, action) => {
        state.loading = false;
        state.ads = action.payload ; // undefined 방지
      })
      .addCase(getAdList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default adSlice.reducer;
