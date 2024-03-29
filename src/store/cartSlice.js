import { createSlice } from "@reduxjs/toolkit";

const initialState={
    item: [] , 
    deliveryFee: 15 , 
    freeDeliveryFrom: 200 , 

};

export const cartSlice = createSlice({
    name: 'cart' ,
    initialState,
    reducers: {
        addCartItem:(state, action)=>{
            const newProduct = action.payload.product ;
            const cartItem = state.items.find(
                (item)=>item.product.id=== newProduct.id
                );
            if(cartItem){
                cartItem.quantity++;
                return;

            }
            else{
                state.items.push({product:newProduct , quantity: 1}) ;
            }
         
        } , 
        changeQuantity: (state, action)=>{},
    },

})