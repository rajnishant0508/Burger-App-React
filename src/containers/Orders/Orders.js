import React,{Component  } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
class Orders extends Component{
    state={
        orders:[],
        spinner:true,
    }
    componentDidMount(){
        axios.get('/orders.json')
          .then(res=>{
             const fetchOrder=[]; 
             for(let key in res.data){
                 fetchOrder.push({
                    ...res.data[key],
                    id:key
                })
             }
             this.setState({
                 spinner:false,
                 orders:fetchOrder
             })
             console.log(fetchOrder)
          })
          .catch(err=>{
              this.setState({
                  spinner:false
              })
          })
    }
    render(){
        return(
           <div>
     
               {
                this.state.orders.map((p,key)=>{
                   return(
                   <Order key={p.id} ingredients={p.ingredients} price={p.price}/>
                   )
               })}
           </div>
        )
    }
}
export default Orders;