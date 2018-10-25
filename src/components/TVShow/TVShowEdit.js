import React from 'react';
import Button from '@material-ui/core/Button';

import TVShowForm from './TVShowForm';

export default class TVShowEdit extends React.Component {

  state = {open: false};

  openForm = () => this.setState({open: true});
  closeForm = () => this.setState({open: false});

  render() {
    return (
      <div>
        <Button onClick={this.openForm}>Edit</Button>
        <TVShowForm obj={this.props.obj} open={this.state.open} closeForm={this.closeForm} />
      </div>
    );
  }
}