import React from "react";
import Buttons from "../../UI/Buttons/Buttons";

const OrderSummary =(props) =>{
    const Ordersummary=props.ingredients.map((p,index)=>{
        return(
            <li key={p.id}>
                <span style={{textTransformL:'capitalize'}}>{p.name}: </span><span>{p.value}</span>
            </li>   
        )
    })
    return(
       <div>
           <h3>Your Order</h3>
           <p>A Delicious burger with the following ingredients:</p>
           <ul>
               {Ordersummary}
           </ul>
           <p><strong>Total Price:{props.totalPrice}</strong></p>
           <p>Continue to checkout?</p>
           <Buttons btntype='Danger' clicked={props.purchaseCanclled}>CANCEL</Buttons>
           <Buttons btntype='Success' clicked={props.purchaseContinue}>CONTINUE</Buttons>
       </div>
    )
}
export default OrderSummary;