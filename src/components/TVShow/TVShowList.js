import React, {Component} from 'react';

import FirebaseService from "../../services/FirebaseService"
import convertIndexedObjsToArray from "../../utils/convertIndexedObjsToArray"

import TVShowCard from '../TVShow/TVShowCard'


class TVShowList extends Component {

  state = {
    objs: [],
  };

  getObjs = () => {
    FirebaseService.get('tv-shows', (objs) => {
      this.setState( {'objs': convertIndexedObjsToArray(objs)} );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {
          this.state.objs.map((obj) => {
            return  <TVShowCard
              id={obj.id}
              name={obj.name}
              description={obj.description}
              isFavorite={obj.isFavorite}
              isFinished={obj.isFinished}
            />
          })
        }     
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.getObjs();
  }
}

export default TVShowList;