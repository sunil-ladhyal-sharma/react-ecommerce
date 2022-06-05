import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <label className="navbar-logo ml-2" >SunSha</label>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-2" id="navbarSupportedContent">
        <div className="col-md-6 col xs-12 col-sm-12">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
             <NavLink  to="/">Home</NavLink>
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
        <div className="col-md-4 col-sm-12 col-xs-12">
        <NavLink  to="/cart"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></NavLink>
        
        </div>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Navigation