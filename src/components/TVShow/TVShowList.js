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

  isListOk = (lst) => { return !(typeof lst == 'undefined' || !lst || !lst.length); }

  listObjs = () => {

    if (!this.isListOk(this.state.objs)) {
      return <b>Click in the Plus sign, on the bottom right of the page to add your first card</b>;
    }

    return this.state.objs.map((obj) => {
      return <TVShowCard obj={obj} />
    })
  }

  getObjs = () => {
    const endpoint = 'tv-shows/' + GetUser().uid;
    FirebaseREST.get(endpoint, (objs) => {
      if (objs) {
        this.setState( {'objs': convertIndexedObjsToArray(objs)} );
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.listObjs()}
        <TVShowAdd />     
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.getObjs();
  }
}

export default TVShowList;