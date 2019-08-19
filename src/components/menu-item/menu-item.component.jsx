import React from "react";
import {withRouter}  from "react-router-dom";
import "./menu-item.styles.scss"

const MenuItem =  ({ id, title , imageUrl , linkUrl , size, history, match})   => {
    return(
        <div  className={`menu-item  menu-item--${id} ${ size||""}`} onClick={() => history.push(`${match.path}${linkUrl}`)}  >

       
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

export default withRouter(MenuItem);