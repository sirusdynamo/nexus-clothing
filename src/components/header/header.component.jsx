import React from "react";

import  {Link} from "react-router-dom";
import  { auth } from "../../firebase/firebase.utils.js";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg"

const Header =({ currentUser  }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo  className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                (currentUser || null)  ?  (<div className="option"  onClick= { () => auth.signOut() }>SIGN OUT</div>)  :
                ( <Link to="/signin" className="option">SIGN IN</Link>)
               
               
                
               
            }
            <Link to="/shop" className="option"></Link>
        </div>

    </div>
)

export default Header;