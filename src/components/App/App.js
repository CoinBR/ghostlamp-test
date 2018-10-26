import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import {AppBar, Toolbar, Typography} from "@material-ui/core";

import NavigationMenu from './NavigationMenu';
import TVShowList from '../TVShow/TVShowList'
import { PATHS } from './routes';
import { PrivateRoute, PropsRoute } from './SpecialRoutes';
import Register from '../Login/Register';
import Login from '../Login/Login';
import Logout from '../Login/Logout';



class App extends Component {

  render() {
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
          <div>
            <Route exact path={PATHS.register} component={Register} />
            <Route exact path={PATHS.login} component={Login} />  
            <Route exact path={PATHS.logout} component={Logout} />           
            <PrivateRoute exact path={PATHS.landing} component={TVShowList} />
            <PrivateRoute exact path={PATHS.myTVShows} component={TVShowList} />
          </div>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;