import React from "react";
import classes from "./Navigation.css";
import Navigations from "../Navigation/Navigations/Navigations";

const Navigation = (props) =>{
    return(
    <ul className={classes.Navigation}>
       <Navigations link="/" active>BurgerBuilder</Navigations>
       <Navigations link="/orders">Orders</Navigations>
    </ul>
    )
}
export default Navigation;