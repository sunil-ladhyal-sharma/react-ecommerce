import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
//import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Spinner from "../Shared/Spinner/Spinner";
// import { decrement, increment,incrementByAmount } from './counterSlice'

function Cart() {
  const [cart, setCart] = useState([]);
  const [hide, setHide] = useState("show");

  const showStatus = useSelector((state) => state.spinner.value);
  const cartItems = useSelector((state) => state.cart.value);

  const cartItem = cartItems === 0 ? "" : cartItems.split(";;");

  /* Hide the spinner after 5 sec. */

  useEffect(() => {
    setTimeout(() => {
      setHide(showStatus === 0 ? "hide" : showStatus);
    }, 2000);
  }, [showStatus]);

  useEffect(() => {
    setCart(cartItem);
  }, []);

  console.log(cartItem);
  console.log("Cart Component", cartItems);
  return (
    <>
     <center><Spinner hide={hide} /></center> 
      <div className="pb-5">
        <Navigation />
      </div>
      <div className="m-5">
        {/* <p>{{cartItems}}</p> */}

        {cart.length < 1 ? (
          <p className="text-center">No Product in Cart</p>
        ) : (
          <div className="row">
            {cart.map((item, i) =>
              i > 0 ? (
                <div className="card p-5 my-3" key={JSON.parse(item).id}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={JSON.parse(item).image}
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="col-md-2">{JSON.parse(item).title}</div>
                    <div className="col-md-4">
                      {JSON.parse(item).description}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
