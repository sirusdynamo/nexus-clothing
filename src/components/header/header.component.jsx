import React from "react";

import  {Link} from "react-router-dom";

import {connect}  from "react-redux";
import  { auth } from "../../firebase/firebase.utils.js";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import CartIcon  from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector } from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";


const Header =({ currentUser , hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo  className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {



                (currentUser || null)  ? 
                (<div className="option"  onClick= { () => auth.signOut() }>SIGN OUT</div>)  :
                ( <Link to="/signin" className="option">SIGN IN</Link>)
               
            }
            <Link to="/shop" className="option"></Link>
            <CartIcon/>
        </div>
        {
            hidden? null: <CartDropdown/>
            
            
            
        }
       


    </div>
)


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})
export default connect(mapStateToProps,)(Header);









// Reducers are triggered whenever an action is dispatched
// -------------------------------------------------------
// Creating new ar with someArray.map() or someArray.filter()
// Merging arrays with array.concat
// Selecting portion of an array with array.slice
// Copying values with Object.assign
// Copying values with the spread operator { ...oldState, ...newData }