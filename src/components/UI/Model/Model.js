import React,{Component} from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Model.css";


class model extends Component{

    shouldComponentUpdate(nextProps,nextState){
        let upadte = false;
        if(nextProps.show !== this.props.show || nextProps.children !== this.props.children){
          upadte=true;
        } 
        return upadte;
    }

    render(){
        
        return(
            <div>
            <Backdrop show={this.props.show}
                        clicked={this.props.modelClosed}/>  
            <div 
                className={classes.Modal}
                style={{
                    transform: this.props.show?'translateY(0)':'translateY(-100vh)',
                    opacity: this.props.show?'1':'0' 
                }}>
                {this.props.children}

            </div>
            </div>
        
        )
    }
}
export default model;