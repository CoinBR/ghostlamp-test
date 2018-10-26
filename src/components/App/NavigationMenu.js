import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { PATHS } from './routes';
import TVShowList from '../TVShow/TVShowList'

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
      <List>
        <Link to={PATHS.myTVShows}>
            <ListItem button key="placeholder">            
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="placeholder" />
            </ListItem>
        </Link>
      </List>
    );

    return (
        <div>
          <Button onClick={this.toggleDrawer('left', true)}>botao</Button>
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

export default NavigationMenu;