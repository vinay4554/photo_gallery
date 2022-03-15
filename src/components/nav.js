import React from "react";
import { Link } from "react-router-dom";

const Navbar=() => {
    return(
        <div className="nav">
            <ul>
               <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/nature">
                    <li>Nature </li>
                </Link>
                <Link to="/clouds">
                    <li>Clouds</li>
                </Link>
                <Link to="/animals">
                    <li>Animal </li>
                </Link>
                <Link to="/food">
                    <li>Food </li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;