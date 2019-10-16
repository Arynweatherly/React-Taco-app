import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import OrderView from "./views/OrderView";

class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route path="/views" render={props => {
          return <OrderView userId={this.props.userId} />
        }} />
          <Route exact path="/" render={(props) => {
          return <Home />}} />
      </>
    )
  }
}

export default ApplicationViews;
