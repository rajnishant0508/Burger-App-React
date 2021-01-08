import React from "react";
import classes from "./DrawerToggel.css";
const DrawerToggle = (props) =>{
    return(
      <div onClick={props.clicked} className={classes.DrawerToggle}>
          <div></div>
          <div></div>
          <div></div>
      </div>
    )
}
export default DrawerToggle;