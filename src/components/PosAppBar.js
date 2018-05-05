import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class PosAppBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      toggleOpen: false
    }
  }

  handleToggle = () => {
    this.setState({ toggleOpen: !this.state.toggleOpen });
  }

  render() {
    return (
      <div>
        <AppBar
        title="POS APP"
        onLeftIconButtonClick={this.handleToggle}
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <Drawer 
          open={this.state.toggleOpen} 
          style={{
            backgroundColor: 'red'
          }}
          className="pos-drawer">

        </Drawer>
      </div>
    );
  }
}