import React,{ Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildContols";
import Burger from "../../components/Burger/Burger";
import Auxx from "../../hoc/Auxx";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummery/Ordersummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";


const Ingredient_price=[
   {id:'1001',name:'salad',value:10},
   {id:'1002',name:'bacon',value:20},
   {id:'1003',name:'cheese',value:30},
   {id:'1004',name:'meat',value:40},
   
]

class BurgerBuilder extends Component{
    state={
        ingredients:null,
        TotalPrice:100,
        puchseable:false,
        purchse:false,
        spinner:false,
    }

    componentDidMount(){
        axios.get('https://myburger-5de7a-default-rtdb.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({
                ingredients:response.data
            })
        })
    }

    puchseableHandler = (updatedIngredients) => {  
      const purchables=updatedIngredients.map((p,index)=>{
        return(
            p.value
        ) 
      }) 
      .reduce((purchables,el)=>{
        return purchables+el;
      },0)

      console.log(purchables) 
      this.setState({puchseable: purchables>0});
    }

    moreIngredientHandler = (event) =>{
        const ingredient_index=this.state.ingredients.findIndex(p=>{
            return event===p.name; 
        });
        
        const updatedIngredients=[...this.state.ingredients];
        
        const ingredient={...this.state.ingredients[ingredient_index]};
        const oldCount=ingredient.value;
        const newCount=oldCount+1;
        ingredient.value=newCount;
    
        updatedIngredients[ingredient_index]=ingredient



        const ingredient_price_index=Ingredient_price.findIndex(p=>{
            return event===p.name; 
        });

        const ingredient_price={...Ingredient_price[ingredient_price_index]};
        const addedPrice=ingredient_price.value;

        const oldPrice=this.state.TotalPrice;

        const newPrice=oldPrice+addedPrice;

        this.setState({
            TotalPrice:newPrice,
            ingredients:updatedIngredients
        })
        this.puchseableHandler(updatedIngredients);

    }

    removeIngredientHandler = (event) =>{
        const ingredient_index=this.state.ingredients.findIndex(p=>{
            return event===p.name; 
        });
        
        const updatedIngredients=[...this.state.ingredients];
        
        const ingredient={...this.state.ingredients[ingredient_index]};
        const oldCount=ingredient.value;
        
        if(oldCount <=0 ){
            return;
        }
        
        const newCount=oldCount-1;
        ingredient.value=newCount;
    
        updatedIngredients[ingredient_index]=ingredient



        const ingredient_price_index=Ingredient_price.findIndex(p=>{
            return event===p.name; 
        });

        const ingredient_price={...Ingredient_price[ingredient_price_index]};
        const addedPrice=ingredient_price.value;

        const oldPrice=this.state.TotalPrice;

        const newPrice=oldPrice-addedPrice;

        this.setState({
            TotalPrice:newPrice,
            ingredients:updatedIngredients
        })
        this.puchseableHandler(updatedIngredients);

    }

    orderSummary = () =>{
        this.setState({
            purchse:true
        })
    }

    canclePurchseHandler = () =>{
        this.setState({
            purchse:false
        })
    }

    purchaseContinueHandler = () =>{
        //alert('You continue');
        // this.setState({
        //     spinner:true
        // })
        // const order={
        //     ingredients:this.state.ingredients,
        //     price:this.state.TotalPrice,
        //     customer:{
        //        name:'Maximaiun anna',
        //        phoneno:9991919239,
        //        email:'abc@gamil.com',
        //     },
        //     dileveryMode:'Fast'   
        // }
        // axios.post('/orders.json',order)
        //      .then(response=>{
        //         console.log(response)
        //         this.setState({
        //             purchse:false,
        //             spinner:false,
        //         })
        //      })
        //      .catch(error=>{
        //         console.log(error)
        //         this.setState({
        //             purchse:false,
        //             spinner:false,
        //         })
        //      }) 
        this.props.history.push({
            pathname:"/checkout",
            state:{
                ingredient111:[...this.state.ingredients],
                totalprice:this.state.TotalPrice,
            }
        
        });
        
        
    }

    

    render(){
        let orderSummary=null;

        let burger=<Spinner/>
         
        let disableinfo=null;

        if(this.state.ingredients){
            
            const disableInfo=[...this.state.ingredients];
            disableinfo =disableInfo.map((p,index)=>{
                let valArr=[];
                if(p.value<=0){
                    valArr.push({label:p.name,type:p.name,value:true})
                }else{
                    valArr.push({label:p.name,type:p.name,value:false})
                }
                return(
                    valArr
                )
                
            })
            .reduce((prv,next)=>{
                return prv.concat(next);
            },[]);
            
            burger=
            <Auxx>
             <Burger ingredients={this.state.ingredients}/>
             <BuildControls 
                   ingredientAdded={this.moreIngredientHandler} 
                   ingredientRemove={this.removeIngredientHandler}
                   totalPrice={this.state.TotalPrice}
                   buttonDisable={disableinfo}
                   purchabless={this.state.puchseable}
                   orderNow={this.orderSummary}/>
            </Auxx>
            orderSummary=
                <OrderSummary 
                    ingredients={this.state.ingredients}
                    purchaseCanclled={this.canclePurchseHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    totalPrice={this.state.TotalPrice}/>
                    
        }    
        if(this.state.spinner){
            orderSummary = <Spinner/>;
        }
        //console.log(OrderSummary);

        return(
            <Auxx>
                
                <Model show={this.state.purchse} modelClosed={this.canclePurchseHandler}>
                    {orderSummary}
                </Model>
                {burger}
            </Auxx>
        )
    }
}
export default BurgerBuilder;