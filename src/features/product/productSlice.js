import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api"; // Axios 인스턴스

// ✅ 상품 목록 조회 Thunk
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/product/products");
      return res.data.products; // 상품 리스트 반환
    } catch (error) {
      return rejectWithValue(error.response?.data || "상품 목록 조회 실패");
    }
  }
);

// ✅ 특정 상품 상세 조회 Thunk
export const getProductDetail = createAsyncThunk(
  "products/getProductDetail",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/product/${id}`);
      // console.log("detail",res.data.product)
      return res.data.product; // 상품 상세 데이터 반환
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "상품 정보를 가져오는데 실패했습니다.");
    }
  }
);

// ✅ 상품 등록 Thunk
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const res = await api.post("/product", productData);
      return res.data; // 새로 추가된 상품 데이터 반환
    } catch (error) {
      return rejectWithValue(error.response?.data || "상품 등록 실패");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const res = await api.put(`/product/${productData.id}`, productData); // 상품 ID를 포함하여 업데이트 요청
      return res.data; // 업데이트된 상품 데이터 반환
    } catch (error) {
      return rejectWithValue(error.response?.data || "상품 수정 실패");
    }
  }
);

// ✅ Redux Slice 생성
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [], // 상품 리스트
    selectedProduct: null, // 특정 상품 상세 정보
    loading: false, // 로딩 상태
    error: null, // 에러 상태
  },
  reducers: {
    setSelectedProduct : (state,action)=>{
      state.selectedProduct = action.payload
    }
  }, // 일반적인 reducer 추가 가능
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
      })

      // 📌 특정 상품 상세 조회 요청
      .addCase(getProductDetail.pending, (state) => {
        state.loading = true;
        state.selectedProduct = null; // ✅ 기존 데이터 초기화
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      })
      
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
  },
});
export const {setSelectedProduct} = productSlice.actions
export default productSlice.reducer;
