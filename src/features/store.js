import {configureStore} from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import productSlice from './product/productSlice'
import cartSlice from  './cart/cartSlice'
import uiSlice from './ui/uiSlice'
import orderSlice from  './order/orderSlice'
import adSlice from './ad/adSlice'

const store = configureStore({
    reducer : {
        user : userSlice,
        product : productSlice,
        cart : cartSlice,
        ui :  uiSlice,
        order : orderSlice,
        ad : adSlice
    }
})

export default store