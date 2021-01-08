import React,{Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Toolbar from '../UI/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from "../UI/SideDrawer/SideDrawer";

class Layout extends Component{
   state={
      showSideDrawer: true
   }

   sideDrawerHandler = () =>{
      this.setState({
         showSideDrawer:false
      })
   }

   sideDrawerToggelHandler = () =>{
      this.setState({
         showSideDrawer:!this.state.showSideDrawer
      })
   }

   render(){
      return(
         <Auxx>
             <Toolbar drawerToggelClicked={this.sideDrawerToggelHandler}/>
             <SideDrawer 
               open={this.state.showSideDrawer} 
               closed={this.sideDrawerHandler}/>
             <main className={classes.Content}>
                {this.props.children}
             </main>
         </Auxx>      
      )
   }
}
export default Layout;