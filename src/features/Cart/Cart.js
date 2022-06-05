import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
// import { decrement, increment,incrementByAmount } from './counterSlice'

function Cart() {
  const cartItems = useSelector((state) => state.cart.value);
  console.log("Cart Component", cartItems);
  const cartItem = cartItems === 0 ? "" : cartItems.split(";");
  const [cart, setCart] = useState([]);

  console.log(cartItem);
  useEffect(() => {
    setCart(cartItem);
  }, []);
  return (
    <>
      <div className="pb-5">
        <Navigation />
      </div>
      <div className="m-5">
        {/* <p>{{cartItems}}</p> */}

        <p>
          {cart.length < 1 ? (
            <p class="text-center">No Product in Cart</p>
          ) : (
            <div className="row">
              {cart.map((item, i) =>
                i > 0 ? (
                  <div className="card p-5 my-3" key={JSON.parse(item).id}>
                      <div className="row">
                      <div class="col-md-2"><img src={JSON.parse(item).image} width="150px" height="150px" /></div>
                      <div class="col-md-2">{JSON.parse(item).title}</div>
                      </div>
                      </div>
                ) : (
                  ""
                )
              )}
            </div>
          )}
        </p>
      </div>
    </>
  );
}

export default Cart;
