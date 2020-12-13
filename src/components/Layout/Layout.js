import React from 'react';
import Auxx from '../../hoc/Auxx';
import classes from './Layout.css';

const Layout = (props) =>{

   return(
      <Auxx>
          <div>ToolBar,SideDrawer,BackDrawer</div>
          <main className={classes.Content}>
             {props.children}
          </main>
      </Auxx>      
   )
}
export default Layout;