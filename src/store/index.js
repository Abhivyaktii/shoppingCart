import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSLice from "./cart-slice";
const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSLice.reducer
    }
})

export default store