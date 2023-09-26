import React , {Component} from 'react'
import {Link } from "react-router-dom"
function NavBar (){
  return(



  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
         <a className="nav-link" href="https://www.sliit.lk "> <span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
         
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Receptionist<span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="https://www.sliit.lk/">Doctor<span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Pharmacist<span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Lab Manager<span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#"> Cashier<span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Supply Manager <span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#"> Stock Mnagaer<span className="sr-only"></span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Supplier Payment Manager <span className="sr-only"></span></a>
        </li>
      </ul>
      
    </div>
  </nav>

  )
}

export default NavBar;