import React,{Component  } from "react";
import classes from "./BurgerIngredients.css";

class BurgerIngredient extends Component{
    render(){
        
        let burgerIngredient=null;

           if(this.props.type==='top-bread'){
            burgerIngredient=<div className={classes.BreadTop}>
                  <div className={classes.Seeds1}></div>
                  <div className={classes.Seeds2}></div>
            </div>
           }else if(this.props.type==='bacon'){
            burgerIngredient=<div className={classes.Bacon}></div>
           }else if(this.props.type==='cheese'){
            burgerIngredient=<div className={classes.Cheese}></div>
           }else if(this.props.type==='salad'){
            burgerIngredient=<div className={classes.Salad }></div>
           }else if(this.props.type==='meat'){
            burgerIngredient=<div className={classes.Meat}></div>
           }else if(this.props.type==='bottom-bread'){
            burgerIngredient=<div className={classes.BreadBottom}></div>
           }else{
               burgerIngredient=null;
           }
        
           return(
            burgerIngredient
        )   
        
    }
}

export default BurgerIngredient;