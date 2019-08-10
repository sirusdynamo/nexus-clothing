import React from "react";

import "./menu-item.styles.scss"

const MenuItem =  ({ id, title , imageUrl , size})   => {
    return(
        <div  className={`menu-item  menu-item--${id} ${ size||""}`}>

       
<div 

className="background-image"
style={
    {
        backgroundImage:`url(${imageUrl})`
    }
}



> 
    <div className="menu__content">
        <h1 className="menu__title">{ title }</h1>
        <span className="menu__subtitle"> SHOP NOW</span>
    </div>
</div>
</div>
)
    }

export default MenuItem;