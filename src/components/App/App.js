import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { FirebaseApp } from '../../services/Firebase/Firebase'

import {AppBar, Toolbar, Typography} from "@material-ui/core";

import NavigationMenu from './NavigationMenu';
import TVShowList from '../TVShow/TVShowList'
import { PATHS } from './routes';
import PrivateRoute from './PrivateRoute';
import Register from '../Login/Register';
import Login from '../Login/Login';
import Logout from '../Login/Logout';



class App extends Component {

  state = { 
    loading: true, 
    isAuthenticated: false, 
    user: null 
  };

  componentWillMount() {
    FirebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          user: user,
        });
      } else {
        this.setState({
          isAuthenticated: false,
          user: null,
        });
      }
    });
  }

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
            <PrivateRoute exact path={PATHS.landing} component={TVShowList} authenticated={this.state.isAuthenticated} />
            <PrivateRoute exact path={PATHS.myTVShows} component={TVShowList} authenticated={this.state.isAuthenticated} />
          </div>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;