import React, { Component } from 'react';
import AppplicationViews from './components/ApplicationViews'
import NavBar from './components/nav/NavBar'
import Login from './components/auth/Login'
import './App.css';

class App extends Component {
  // construstor- first thing that happens
  state = {
    user: localStorage.getItem("credentials") !== null,
    userId: localStorage.getItem("credentials") ? JSON.parse(localStorage.getItem("credentials")) [0].id : false
  }

  // Check if credentials are in local storage --returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (authObj) => {

    //  For now, just store the email and password that the customer enters into local storage.
    localStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated(),
      userId: authObj[0].id
    });
  }


  render() {
    return (
      <>
        {this.state.user ? (
          <>
            <AppplicationViews userId={this.state.userId} />
            <NavBar/>
          </>
        ) : (
            <Login setUser={this.setUser} />
          )}
      </>
    )
  }
}

export default App;


