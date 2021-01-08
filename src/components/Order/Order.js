import React from "react";
import classes from "./Order.css";
const Order = (props) =>{
    const ingredient=[];
    for(let ing in props.ingredients){
        ingredient.push(props.ingredients[ing])
    }
    const ingredient_data=[];
    for(let ingg in ingredient){
        ingredient_data.push(ingredient[ingg])
    }

    const ing_output=ingredient_data.map(ig=>{
        return(
            <span 
               style={{
                   textTransform:'capitalize',
                   display:'inline-block',
                   margin:'0 8px',
                   border:'1px solid #ccc',
                   padding:'5px',
                }}
               key={ig.id}>{ig.name} : {ig.value}</span>
        )
    })

    return(
       <div className={classes.Order}>
           <p><strong>Ingredients: </strong>{ing_output}</p>
           <p>Price<strong>{props.price}</strong></p>
       </div>
    )
}
export default Order;