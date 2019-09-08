import React from "react";


import {connect}  from "react-redux";
import  { auth } from "../../firebase/firebase.utils.js";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import CartIcon  from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector } from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";

import {HeaderContainer,OptionLink,OptionsContainer,LogoContainer}  from "./header.styles"


const Header =({ currentUser , hidden }) => (
    <HeaderContainer>
        <LogoContainer  to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop" >SHOP</OptionLink>
            <OptionLink to="/contact"  >CONTACT</OptionLink>
            {



                (currentUser || null)  ? 
                (<OptionLink as="div"  onClick= { () => auth.signOut() }>SIGN OUT</OptionLink>)  :
                ( <OptionLink  to="/signin" >SIGN IN</OptionLink>)
               
            }
            <OptionLink to="/shop" ></OptionLink>
            <CartIcon/>
        </OptionsContainer>
        {
            hidden? null: <CartDropdown/>
            
            
            
        }
       


       </HeaderContainer>
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