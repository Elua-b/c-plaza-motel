import {createSlide} from "@reduxjs/toolkit"
const cartSlide=createSlide({
    name:"cart",
    initialState:{
        products:[],
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload)
            state.total +=action.payload.price * action.payload.quantity
        },
        reset:(state)=>{
            state=initialState;
        }
    }
});
export const {addProduct,reset}=cartSlide.actions;
export default cartSlide.reducer;
