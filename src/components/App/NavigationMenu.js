import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';

import { PATHS } from './routes';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavigationMenu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render () {
    
    const { classes } = this.props;
    const links = (
      <List className={classes.list}>
        <Link to={PATHS.myTVShows}>
            <ListItem button key={PATHS.myTVShows}>            
                <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText primary="My TV Shows" />
            </ListItem>
        </Link>
        <Link to={PATHS.register}>
            <ListItem button key={PATHS.register}>            
                <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText primary="Register" />
            </ListItem>
        </Link>
        <Link to={PATHS.login}>
            <ListItem button key={PATHS.login}>            
                <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText primary="Login" />
            </ListItem>
        </Link>
        <Link to={PATHS.logout}>
            <ListItem button key={PATHS.logout}>            
                <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </Link>
      </List>

    );

    return (
        <div>
          <Button onClick={this.toggleDrawer('left', true)}>
            <MenuIcon />
          </Button>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {links}
            </div>
          </Drawer>
        </div>
    )}
  };

export default withStyles(styles)(NavigationMenu);