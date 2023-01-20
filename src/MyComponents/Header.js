import React from 'react';
import logo from './Standard Collection 15.png';
import logo1 from './Group 2305.png';
import logo2 from './Vector.png';
export default function Header() {
  return (
    <div><nav className="navbar bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/#"><img src={logo} alt="Logo" /></a>
      <a className="navbar-brand1" href="/#"><img src={logo1} alt="Logo1" /></a>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search by Name/Phone No./PAN No." aria-label="Search" /><a className="navbar-brand2" href="/#"><img src={logo2} alt="Logo2" /></a>
        
      </form>
    </div>
  </nav></div>
  )
}
