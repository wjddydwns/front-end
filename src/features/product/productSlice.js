import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api"; // API 호출을 위한 axios 인스턴스

// ✅ 상품 등록 Thunk
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const res = await api.post("/product", productData); // 상품 등록 API 호출
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "상품 등록 실패");
    }
  }
);

// ✅ 상품 목록 조회 Thunk
export const getProducts = createAsyncThunk(
  "products/products",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/product/products"); 
      console.log("123,",res)// 상품 리스트 API 호출
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.response?.data || "상품 목록 조회 실패");
    }
  }
);

// ✅ Redux Slice 생성
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [], // 상품 리스트
    loading: false, // 로딩 상태
    error: null, // 에러 상태
  },
  reducers: {}, // 일반적인 reducer 추가 가능
  extraReducers: (builder) => {
    builder
      // 📌 상품 등록 요청
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload); // 새로운 상품 추가
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 📌 상품 목록 조회 요청
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // 상품 리스트 업데이트
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Reducer export
export default productSlice.reducer;
