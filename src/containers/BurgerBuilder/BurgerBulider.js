import React,{ Component } from "react";
import Auxx from "../../hoc/Auxx";

class BurgerBuilder extends Component{
    render(){
        return(
            <Auxx>
                <div>Burger ingredients</div>
                <div>Burger parts</div>
            </Auxx>
        )
    }
}
export default BurgerBuilder;