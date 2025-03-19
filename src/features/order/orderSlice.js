import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../utils/api";
import { getCart } from "../cart/cartSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderList : [],
    orderNum : "",
    selectedOrder : {},
    error:"",
    loading : false,
    totalPageNum : 1
}

export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (payload,{dispatch,rejectedWithValue})=>{
        try{
            const res = await api.post("/order",payload)
            if(res.status !== 200){
                throw new Error(res.error)
            }
            return res.data.orderNum
        }
     
        catch(error){
            return rejectedWithValue(error.error)
        }
    }
)
const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        setSelectdOrder : (state,action)=>{
            state.selectedOrder = action.payload
        },
    },
    extraReducers:(builder)=>{
        builder
          .addCase(createOrder.pending,(state)=>{
            state.loading = true;
          })
          .addCase(createOrder.fulfilled,(state,action)=>{
            state.loading  =false;
            state.error = ""
            state.orderNum = action.payload
          })
          .addCase(createOrder.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
          })
    }
})
export const {setSelectdOrder} = orderSlice.actions;
export default orderSlice.reducer;