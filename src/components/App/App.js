import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { FirebaseApp } from '../../services/Firebase/Firebase'

import {AppBar, Toolbar, Typography} from "@material-ui/core";

import NavigationMenu from './NavigationMenu';
import TVShowList from '../TVShow/TVShowList'
import Register from '../Login/Register'
import { PATHS } from './routes';
import PrivateRoute from './PrivateRoute';



class App extends Component {

  state = {
    user: null,
  }

  componentWillMount() {
    FirebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user,
        });
      } else {
        this.setState({
          user: null
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
            <PrivateRoute exact path={PATHS.myTVShows} component={TVShowList} authenticated={this.state.user} />
            <Route exact path={PATHS.register} component={Register} />
          </div>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;