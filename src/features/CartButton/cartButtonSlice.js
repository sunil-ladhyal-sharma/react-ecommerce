import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
      /* Action : Add cart items to the store one by one. */
      addToCart: (state, action) => {
        
        /* Store the cart data in json stringify format so that in cart component we can reterive value. */
        //console.log("action payload", action.payload)
        state.value += ";;"+JSON.stringify(action.payload);
        //console.log("state value : ",state.value)
        /* Retrieve data from the store. */
       
      },
   
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, cartItemCount } = cartSlice.actions

export default cartSlice.reducer