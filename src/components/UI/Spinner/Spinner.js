import React from "react";
import classes from "./spinner.css";
const Spinner = (props) =>{
    return(
         <div>
             <div className={classes.loader}>Loading...</div>
         </div>
    )
}
export default Spinner;