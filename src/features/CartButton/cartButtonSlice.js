import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      addToCart: (state, action) => {
        // const cart = JSON.stringify(action.payload);
        // state.value = state.value.push(cart);
        // const cartData = [];
        // const previousVal = state.value;
        // cartData.push(previousVal+","+action.payload);
        // cartData.push(action.payload);
        if(state.value === ""){
            // state.value = [];
        }else{

        }
        /* Store the cart data in json stringify format so that in cart component we can reterive value. */
        state.value += ";"+JSON.stringify(action.payload);
        /* Retrieve data from the store. */
        const cartData = state.value.split(";");
        cartData.forEach((element,i) => {
            console.log(i);
            if(i > 0)
            JSON.parse(element).title ="alter";
            console.log(JSON.parse(element).title);
        });
        
        console.log(cartData);
        // state.value = cartData;
      }

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer