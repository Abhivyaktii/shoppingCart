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
            }
            
        },
        removeFromCart(state,action){
            const id=action.payload
            const existingItem=state.itemsList.find(item=>item.id===id)
            if(existingItem.quantity===1){
                state.itemsList=state.itemsList.filter(item=>item.id!==id)
                state.totalQuantity--
                state.total-=existingItem.price
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice-=existingItem.price
                state.total-=existingItem.price
            }

        },
        setShowCart(state){
            state.showCart=!state.showCart
        }
    }
})

export const cartActions= cartSlice.actions;

export default cartSlice;