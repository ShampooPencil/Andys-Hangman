import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactFitty } from "react-fitty";
import Navfitty from "./Navfitty";


export default function Navbar(){
    //just practicing css grid with react.js
    return <> 
    <nav className="Navbar nav_container">
        <ul className="nav_ul">
            <li className="nav-item">
            <NavLink to="/" className="nav-link">
             <Navfitty navtext={"Home"}/>
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/play" className="nav-link">
                <span className="link-text">Play</span>
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
                <span className="link-text">Profile</span>
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/login" className="nav-link">
                <span className="link-text">Login</span>
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/register" className="nav-link">
                <span className="link-text">Register</span>
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/about" className="nav-link">
                <span className="link-text">AboutUs/Contact</span>
            </NavLink>
            </li>
        </ul>
        
    </nav>
   
    
    </>
    
}