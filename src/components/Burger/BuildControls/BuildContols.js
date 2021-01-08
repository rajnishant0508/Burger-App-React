import React,{Component} from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

class BuildControls extends Component{ 
    
    state={
        controls:[
            {label:'salad',type:'salad',value:true},
            {label:'cheese',type:'cheese',value:true},
            {label:'bacon',type:'bacon',value:true},
            {label:'meat',type:'meat',value:true}
        ]
    }

    static getDerivedStateFromProps(props, state) {
        return {controls: props.buttonDisable };
      }

   render(){
        return(
        <div className={classes.BuildControls}>  
            <strong className={classes.Price}>Current Price: <strong>{this.props.totalPrice}</strong></strong>
            {
                this.state.controls.map(ctrl=>{
                    return(
                    <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label}
                        added={() => this.props.ingredientAdded(ctrl.type)}
                        remove={() => this.props.ingredientRemove(ctrl.type)}
                        disabled={ctrl.value}
                        />
                    )
                })
            } 
            <button 
            className={classes.OrderButton}
            disabled={!this.props.purchabless}
            onClick={this.props.orderNow}>ORDER NOW</button>  
        </div>
        )
    }
}
export default BuildControls;
