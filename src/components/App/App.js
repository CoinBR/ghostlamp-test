import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import {AppBar, Toolbar, Typography} from "@material-ui/core";

import NavigationMenu from './NavigationMenu';
import { PATHS } from './routes';
import TVShowList from '../TVShow/TVShowList'


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
          <Route exact path={PATHS.myTVShows} component={TVShowList} />
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;