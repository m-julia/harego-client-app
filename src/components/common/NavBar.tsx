import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" exact >Home</NavLink>{"|"}
            <NavLink to="/search" >Search</NavLink>
        </nav>
    )
}

export default NavBar;