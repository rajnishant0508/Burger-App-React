import React from "react";
import Logo from "../../UI/Logo/Logo";
import Navigations from '../../UI/Navigation/Navigations/Navigations';
import Backdrop from "../Backdrop/Backdrop";
import classes from './SideDrawer.css'

const SideDrawer = (props) =>{
    let attachedClasses=[classes.SideDrawer,classes.close]
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.open]
    }
   return(
       <div>
           <Backdrop show={props.open} clicked={props.closed}/>
           <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
            <Navigations link="#" active>BurgerBuilder</Navigations>
            <Navigations link="#">Checkout</Navigations>
            </nav>
           </div>
       </div>
   )
}
export default SideDrawer;