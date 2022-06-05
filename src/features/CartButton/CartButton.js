import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './cartButtonSlice'

export function CartButton(props) {
  const cart = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Add To Cart"
          onClick={() => dispatch(addToCart(props.cartItem))}
        >
          Add To Cart
        </button>
        {/* <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(20))}
        >
          Decrement
        </button> */}
      </div>
    </div>
  )
}

export default CartButton;