import React from 'react';
import FirebaseService from "../../services/FirebaseService"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class TVShowForm extends React.Component {
  state = {
    operation: 'Add',

    obj: {
      id: null,
      name: null,
      description: null,  
      isFinished: false,
      isFavorite: false,
    }
  };

  resetObj = () => {
    this.setState({
      obj: {
          id: null,
          name: null,
          description: null,  
          isFinished: false,
          isFavorite: false,
        }    
    });
  }

  handleChange = field => event => {
    let value = null;
    if (event.target.type === "checkbox"){
      value = event.target.checked; // is a checkbox
    }
    else{
      value = event.target.value; // is a textField
    }

    const obj = this.state.obj;
    obj[field] = value;  

    this.setState({ "obj": obj});
  };


  submit = () => {
    const endpoint = 'tv-shows/'

    // save on firebase
    if (this.state.operation === "Add"){
      FirebaseService.post(endpoint, this.state.obj);
      this.resetObj(); 
    }
    else{
      FirebaseService.update(endpoint, this.state.obj);
    }

    this.closeForm();
  }

  closeForm = () => {
    this.props.closeForm(); // close modal
  }

  prepareToEdit(){
    this.setState({
      obj: this.props.obj,
      operation: 'Edit',
      });
  }

  componentDidMount() {
    if (this.props.obj){
      this.prepareToEdit();  
    }
  }  

  render() {
    return (
      <React.Fragment>
        {this.props.visualButton}      
        <Dialog
          open={this.props.open}
          onClose={this.closeForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.state.operation} TV Show</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the TV Show information
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              value={this.state.obj.name}
              onChange={this.handleChange('name')}
            />
            <TextField
              margin="dense"
              id="description"
              label="description"
              multiline
              rows="3"
              fullWidth
              value={this.state.obj.description}
              onChange={this.handleChange('description')}
            /> 
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.obj.isFinished}
                  onChange={this.handleChange('isFinished')}
                  value="isFinished"
                  color="primary"
                />
              }
              label="Finished?"
            />   
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.obj.isFavorite}
                  onChange={this.handleChange('isFavorite')}
                  value="isFavorite"
                  color="secondary"
                />
              }
              label="Save to Favorites"
            />           
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeForm} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}