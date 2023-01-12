import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSLice from "./cart-slice";
import uislice from "./ui-slice";
const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSLice.reducer,
        ui:uislice.reducer
    }
})

export default store