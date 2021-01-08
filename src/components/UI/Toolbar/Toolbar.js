import React from "react";
import classes from './Toolbar.css';
import Logo from "../../UI/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import DrawerToggle from "../DrawerToggel/DrawerToggel";

const Toolbar = (props) =>{
    return(
       <header className={classes.Toolbar}>
           <div><DrawerToggle clicked={props.drawerToggelClicked}/></div>
           
           <div className={classes.Logo}>
              <Logo/>
           </div>
           
           <nav className={classes.Desktoponly}>
               <Navigation/>
           </nav>
       </header>
    )
}
export default Toolbar;