import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import TVShowForm from './TVShowForm';


class TVShowAdd extends React.Component {

  state = {open: false};

  openForm = () => this.setState({open: true});
  closeForm = () => this.setState({open: false});

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="fab" color="primary" aria-label="Add" 
            className={classes.addButton} onClick={this.openForm}>
          <AddIcon />
        </Button>
        <TVShowForm open={this.state.open} closeForm={this.closeForm} />
      </div>
    );
  }
}

const styles = {
  addButton: {
    position: "fixed",
    bottom: 25,
    right: 25,
  }, 
};

export default withStyles(styles)(TVShowAdd); 