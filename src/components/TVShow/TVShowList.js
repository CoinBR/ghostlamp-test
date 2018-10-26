import React, {Component} from 'react';

import FirebaseREST from '../../services/Firebase/FirebaseREST';
import convertIndexedObjsToArray from "../../utils/convertIndexedObjsToArray"

import TVShowCard from '../TVShow/TVShowCard'
import TVShowAdd from '../TVShow/TVShowAdd'


class TVShowList extends Component {

  state = {
    objs: [],
  };

  getObjs = () => {
    FirebaseREST.get('tv-shows', (objs) => {
      this.setState( {'objs': convertIndexedObjsToArray(objs)} );
    });
  }

  render() {
    return (
      <React.Fragment>
        <p>{JSON.stringify(this.props)}</p>
        {
          this.state.objs.map((obj) => {
            return  <TVShowCard obj={obj} />
          })
        }
        <TVShowAdd />     
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.getObjs();
  }
}

export default TVShowList;