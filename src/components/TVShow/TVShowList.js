import React, {Component} from 'react';

import { GetUser } from '../../services/Firebase/Firebase'
import FirebaseREST from '../../services/Firebase/FirebaseREST';
import convertIndexedObjsToArray from "../../utils/convertIndexedObjsToArray"

import TVShowCard from '../TVShow/TVShowCard'
import TVShowAdd from '../TVShow/TVShowAdd'

class TVShowList extends Component {

  state = {
    objs: [],
  };

  getObjs = () => {
    const endpoint = 'tv-shows/' + GetUser().uid;
    FirebaseREST.get(endpoint, (objs) => {
      this.setState( {'objs': convertIndexedObjsToArray(objs)} );
    });
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.objs.map((obj) => {
            return <TVShowCard obj={obj} />
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