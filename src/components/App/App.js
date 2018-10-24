import React, {Component} from 'react';
import FirebaseService from "../../services/FirebaseService"

import {MuiThemeProvider} from "material-ui/styles/index";
import {AppBar, Toolbar, Typography, Card, CardContent, CardActions, Button} from "material-ui";
import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

class App extends Component {

state = {
    test: ['loading...']
};

  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            I ❤ TV
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      t1
                    </Typography>
                    <Typography variant="h5" component="h2">
                      t2
                    </Typography>
                    <Typography color="textSecondary">
                      sbt
                    </Typography>
                    <Typography component="p">
                      {this.state.test}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="primary">Learn More</Button>
                  </CardActions>
                </Card>                      
            </React.Fragment>
        </MuiThemeProvider>
    );
  }
  componentDidMount() {
    FirebaseService.get('tests', (fbData) => this.setState({test: fbData}));
  }
}

export default App;