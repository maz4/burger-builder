import React, {Component} from "react";
import Aux from "../Aux/Aux";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler() {
    this.setState({showSideDrawer: false});
  }

  sideDrawerTogglerHandler() {
    this.setState( (prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerTogglerClicked={this.sideDrawerTogglerHandler.bind(this)}/>
        <SideDrawer
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler.bind(this)}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;