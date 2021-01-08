import React,{Component} from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary";
import Contactdata from "../ContactData/Contactdata";

class Checkout extends Component{
    state={
        ingredients:[
            {id:'1001',name:'salad',value:1},
            {id:'1002',name:'bacon',value:1},
            {id:'1003',name:'cheese',value:1},
            {id:'1004',name:'meat',value:1},
       ],
       TotalPrice:100,
    }
    
    static getDerivedStateFromProps(props, state) {
      return {ingredients: props.history.location.state.ingredient111, TotalPrice: props.history.location.state.totalprice };
    }

    checkoutCancledHandler = () =>{
       this.props.history.goBack();
    }
    checkoutContinuedHandler = () =>{
       //console.log(this.state.TotalPrice);
       this.props.history.replace({
         pathname:'/checkout/contact-data',
          state:{
            ingredient111:[...this.state.ingredients],
            totalprice:this.state.TotalPrice,
          }
        });
    }

    render(){
        return(
          <div>
            <CheckoutSummary 
               ingredients={this.state.ingredients}
               checkoutCancled={this.checkoutCancledHandler}
               checkoutContinued={this.checkoutContinuedHandler}/>
              <Route 
                  path={this.props.match.path +'/contact-data'} 
                  render={() =>(<Contactdata ingredient={this.state.ingredients} totalPrice={this.state.TotalPrice}/>)}/>   
          </div> 
        )
    }
}
export default Checkout;