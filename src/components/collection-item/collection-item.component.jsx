import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import {connect}  from "react-redux";
import{ addItem} from "../../redux/cart/cart.actions.js"

const CollectionItem =({ item, addItem}) =>{
    
    const {name, price, imageUrl} = item
    
    return(
    <div className="collection-item">
        <div 
        className="image"
        style= {
            {
            backgroundImage: `url(${imageUrl})`
        }
    }
        >
           
        </div>
            <div className="collection-footer">
                <span className="name">{name}    </span>
                <span className="price"> ${price}   </span>
            </div>
            <CustomButton inverted onClick={ () => addItem(item) }>Add to cart</CustomButton>

       
    </div>
)};


export  default connect( null,{ addItem})(CollectionItem);