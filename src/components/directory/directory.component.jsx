import React from "react";
import {connect}  from "react-redux";
import  "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";


  const Directory=({sections})=>(
       
       
            <div className="menu">
                   {
                   sections.map(({id , ...otherMenuProps}) =>( <MenuItem key={id} id={id}  { ...otherMenuProps}/>))
                   }
            </div>
    
)
const mapStateToProps = createStructuredSelector(
  {
    sections:selectDirectorySections
  }
)


export default connect(mapStateToProps)(Directory);


