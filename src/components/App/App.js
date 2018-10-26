import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

import NavigationMenu from './NavigationMenu';
import TVShowList from '../TVShow/TVShowList'
import { PATHS } from './routes';
import { PrivateRoute, PropsRoute } from './SpecialRoutes';
import Sign from '../Login/Sign';
import Logout from '../Login/Logout';


class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div>
          <AppBar position="static">
              <Toolbar>
                <NavigationMenu />
                <Typography type="title" color="inherit">
                    I ❤ TV
                </Typography>
              </Toolbar>
          </AppBar>
          <div className={classes.routeView}>
            <PropsRoute exact path={PATHS.register} component={Sign} operation="Register" />
            <PropsRoute exact path={PATHS.login} component={Sign} operation="Login" />  
            <Route exact path={PATHS.logout} component={Logout} />           
            <PrivateRoute exact path={PATHS.landing} component={TVShowList} />
            <PrivateRoute exact path={PATHS.myTVShows} component={TVShowList} />
          </div>
        </div> 
      </BrowserRouter>
    );
  }
}

const styles = theme => ({
  center: {
    display: "block",
    "text-align": "center",
  },
});

export default withStyles (styles)(App);