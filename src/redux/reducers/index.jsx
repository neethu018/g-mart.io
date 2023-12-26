import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cart:[],
};

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
            console.log("addtocart action triggered");
            state.cart.push(action.payload);
        }
    }
});
export const {addToCart} = cartSlice.actions;
export const {cartReducer} = cartSlice.reducer;