import React from 'react';

import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import FirebaseREST from '../../services/Firebase/FirebaseREST';
import { GetUser } from '../../services/Firebase/Firebase'
import TVShowForm from './TVShowForm';

export default class TVShowDelete extends React.Component {


  RESTdelete = () => { 
    const endpoint = 'tv-shows/' + GetUser().uid + '/';
    FirebaseREST.delete(endpoint, this.props.obj); 
  }

  render() {
    return (
      <div>
        <Button>
          <DeleteForeverIcon onClick={this.RESTdelete} />
        </Button>
      </div>
    );
  }
}