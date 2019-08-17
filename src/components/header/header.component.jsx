import React from "react";

import  {Link} from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg"

const Header =() => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo  className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            <Link to="/shop" className="option">SIGN IN</Link>
            <Link to="/shop" className="option">XXXX</Link>
        </div>

    </div>
)

export default Header;