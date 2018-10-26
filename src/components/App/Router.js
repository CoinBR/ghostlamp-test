import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LeftMenu from './AppLeftMenu';
import TVShowList from '../TVShow/TVShowList'
import * as routes from './routes'

export default class Router extends Component{

  render(){
    return (
      <BrowserRouter>
        <div>
          <LeftMenu />
          <Route path={routes.MY_TVSHOWS} component={TVShowList} />
        </div>  
      </BrowserRouter>
    )
  }

}