import React,{Component} from "react";
import Burger from "../Burger/Burger";
import Buttons from "../UI/Buttons/Buttons";
import classes from "./CheckoutSummary.css";

const CheckoutSummary = (props) => {
     return(
         <div className={classes.CheckoutSummary}>
             <h4>We Hope it taste well!!!</h4>
             <div>
                 <Burger ingredients={props.ingredients}/>
             </div>
             <Buttons
                btntype="Danger"
                clicked={props.checkoutCancled}>CANCEL</Buttons>
             <Buttons
                btntype="Success"
                clicked={props.checkoutContinued}>CONTINUE</Buttons>
         </div>

     )
}
export default CheckoutSummary;