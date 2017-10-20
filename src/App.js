import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import LockOpen from 'material-ui-icons/LockOpen';
import LockClosed from 'material-ui-icons/Lock';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import firebase from 'firebase';
import config from './config/config';
import User from './components/User';

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      loggedIn: false,
      userName: '',
      email: '',
      avatar: ''
    };
  }

  login() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(resp => {
        const {
          user: { displayName: userName, email, photoURL: avatar }
        } = resp;
        this.setState({
          loggedIn: true,
          userName,
          email,
          avatar
        });
      })
      .catch(e => console.log(e.message));
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          loggedIn: false,
          userName: '',
          email: '',
          avatar: ''
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Google Authentication
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: 30, flexGrow: 1 }}>
          <Grid container spacing={16} justify="center">
            <Grid item xs={12} md={6}>
              <Paper>
                {!loggedIn ? (
                  <Typography type="title">You are not logged in.</Typography>
                ) : (
                  <User info={this.state} />
                )}
                <Grid
                  container
                  spacing={24}
                  justify="center"
                  style={{ marginTop: 10 }}
                >
                  <Grid item>
                    <Button
                      raised
                      onClick={this.login}
                      disabled={loggedIn}
                      color="accent"
                    >
                      <LockOpen />Login
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      raised
                      onClick={this.logout}
                      disabled={!loggedIn}
                      color="accent"
                    >
                      <LockClosed />Logout
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
