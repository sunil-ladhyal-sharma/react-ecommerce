import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";


function Navigation() {
  const cartItems = useSelector((state) => state.cart.value);
  console.log("Cart Component", cartItems);
  const cartItem = cartItems === 0 ? "" : cartItems.split(";;");
  const [cartItemCount, setCartItemCount] = useState([]);

  useEffect(() => {
    setCartItemCount(cartItem.length);
    console.log(cartItem.length)
  }, [cartItem]);
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <label className="navbar-logo ml-2" >SunSha</label>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-2" id="navbarSupportedContent">
        <div className="col-md-6 col xs-10 col-sm-10">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
             <NavLink  to="/"><i className="fa fa-home menu-icon fa-2x" aria-hidden="true"></i></NavLink>
          </li>
          <li className="nav-item">
            {/* <NavLink to="/services" className="nav-NavLink" >Services</NavLink> */}
          </li>
          
          <li  className="nav-item dropdown">
            {/* <NavLink to="/about" className="nav-NavLink dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
              {/* About Us */}
            {/* </NavLink> */}
            {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink className="dropdown-item" >Action</NavLink></li>
              <li><NavLink className="dropdown-item" >Another action</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" >Something else here</NavLink></li>
            </ul> */}
          </li>
          <li className="nav-item">
            {/* <NavLink className="nav-NavLink disabled"   aria-disabled="true">Disabled</NavLink> */}
          </li>
        </ul>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2">
          <span className="cart-item-count">{cartItemCount === 0?cartItemCount:cartItemCount - 1}</span>
        <NavLink  to="/cart"><i className="fa fa-shopping-cart menu-icon fa-2x" aria-hidden="true"></i></NavLink>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navigation