import { createSlice } from "@reduxjs/toolkit";
const cartSlice= createSlice({
    name: 'cart',
    initialState:{
        itemsList: [],
        totalQuantity: 0,
        showCart:false,
        total:0
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload
            // to check if item is already there

            const existingItem=state.itemsList.find((item)=>item.id===newItem.id)

            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice+=newItem.price
                state.total+=newItem.price
                console.log(existingItem.totalPrice);
                console.log("^^^^^^^^^",state.total);
                window.alert("already in cart");
            }
            else{
                state.itemsList.push({
                    id:newItem.id,
                    price: newItem.price,
                    name:newItem.name,
                    quantity:1,
                    totalPrice:newItem.price,
                })
                state.totalQuantity++
                state.total+=newItem.price
                console.log("^^^^^^^^^",state.total);
                
                
            }
            
        },
        removeFromCart(){},
        setShowCart(state){
            state.showCart=true
        }
    }
})

export const cartActions= cartSlice.actions;

export default cartSlice;