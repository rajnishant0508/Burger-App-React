import React from "react";
import classes from "../Navigation.css";
import { NavLink } from "react-router-dom";

const Navigations = (props) =>{
    return(
        
        <li className={classes.Navigation}>
            <NavLink 
              to={props.link}
              exact
              activeClassName={classes.active}
              >{props.children}</NavLink>
        </li>
        
    )
    
}
export default Navigations; 