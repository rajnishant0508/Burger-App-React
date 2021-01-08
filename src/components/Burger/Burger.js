import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import classes from './Burger.css'


const Burger = (props) =>{
    let transform = props.ingredients.map((p,index)=>{
        let val=p.value;
        let valArr=[];
        for(let i=0;i<val;i++){
            valArr.push(<BurgerIngredient key={p.id+i} type={p.name}/>)
        } 
        return(
            valArr
        )

    })
    .reduce((prv,next)=>{
         return prv.concat(next);
    },[]);

    if(transform.length===0){
        transform=<p>Please start adding ingredients.</p>;
    }
    console.log(transform)

    
    return(
       <div className={classes.Burger}>
           <BurgerIngredient type="top-bread"/>
           {/* <BurgerIngredient type="meat"/>
           <BurgerIngredient type="salad"/> */}
           {transform}
           <BurgerIngredient type="bottom-bread"/>
       </div>
    )
}
export default Burger;