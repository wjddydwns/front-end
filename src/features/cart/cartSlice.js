import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

const initialState = {
    loading: false,
    error: "",
    cartList: [],
    selectedItem: {},
    cartItemCount: 0,
    totalPrice: 0,
};

// 🔹 장바구니 추가 API 요청
export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ id, size, qty }, { rejectWithValue }) => {
        try {
            const res = await api.post("/cart", { productId: id, size, qty });
            if (res.status !== 200) {
                throw new Error(res.error);
            }
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCart = createAsyncThunk(
    "cart/getCart",
    async(_,{rejectWithValue})=>{
        try{
            const res = await api.get("/cart")
            if(res.status !== 200){
                throw new Error(res.error)
            }
            console.log("장바구니 목록",res.data.data)
            return res.data.data
        }
        catch(error){
            return rejectWithValue(error.message);

        }
    }
)
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        initialCart: (state) => {
            state.cartItemCount = 0;
            state.totalPrice = 0;
            state.cartList = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                const newItem = action.payload;
                const existingItem = state.cartList.find(
                    (item) => item.productId?._id === newItem?.productId?._id // ✅ 안전한 접근 방식 적용
                );

                if (existingItem) {
                    existingItem.qty += newItem.qty; // ✅ 기존 수량 증가
                } else {
                    state.cartList.push(newItem);
                }

                state.cartItemCount += newItem.qty;
                state.totalPrice += newItem.productId?.price * newItem.qty; // ✅ 가격 계산 오류 수정
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getCart.pending, (state)=>{
                state.loading = true
            })
            .addCase(getCart.fulfilled, (state,action) =>{
                state.loading = false;
                state.error = ""
                state.cartList =  action.payload || []
                state.totalPrice = state.cartList.reduce(
                    (total,item)=>total + item.productId.price * item.qty, 0
                )
                state.cartItemCount = state.cartList.reduce(
                    (total,item) => total + item.qty, 0
                )
            })
            .addCase(getCart.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload
            })
    },
});

export default cartSlice.reducer;
export const { initialCart } = cartSlice.actions;
