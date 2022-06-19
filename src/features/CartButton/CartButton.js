import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showOrHideSpinner } from "../Shared/Spinner/spinnerSlice";
import { addToCart } from "./cartButtonSlice";

export function CartButton(props) {
  const cart = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Add To Cart"
          className="btn btn-dark mb-2"
          onClick={() => {
            /* Dispatch action to show spinner. */
            dispatch(showOrHideSpinner("show"));
            /* Dispatch action to add item object to the store. */
            dispatch(addToCart(props.cartItem));
            /* Dispatch action to hide spinner. */
            setTimeout(() => {
              dispatch(showOrHideSpinner("hide"));
            }, 1500);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default CartButton;
