import React from 'react';
import {connect} from "react-redux";
import "./checkout-item.styles.scss";
import {addItem,removeItem,removeUnitItem}  from "../../redux/cart/cart.actions.js";



const CheckoutItem = ({item, addItem,removeItem,removeUnitItem}) => {
    const {name, imageUrl, quantity,price} = item
    return (
        <div className="checkout-item">
             <div className="image-container">
                 <img src={imageUrl} alt="item"/>
             </div>
             
             <span className="name">{name}</span>
             <span className="quantity">
                <span className="arrow arrow--1" onClick={()=>addItem(item)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow arrow--2"  onClick={()=>removeUnitItem(item)}>&#10095;</span>
             </span>
            
             <span className="price">{price}</span>
             <div className="remove-button"  onClick={()=>removeItem(item)}>&#10005;</div>


        </div>

            
      
    )
};

const mapDispatchToProps = dispatch =>({
    addItem :item => dispatch(addItem(item)),
})
export default connect(null,{addItem,removeItem,removeUnitItem})(CheckoutItem);