import {NavLink } from "react-router-dom";



function Header(){
    return   <nav className="#4dd0e1 cyan lighten-2">
    <div className="nav-wrapper">
      <NavLink  to="/" >React shop</NavLink >
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <NavLink  to="/about">About</NavLink  >
        </li>
      <li>
        <NavLink k  to="/contacts" >Contacts</NavLink  >
        </li>
      </ul>
    </div>
   </nav>
   
   }
   
   export {Header}