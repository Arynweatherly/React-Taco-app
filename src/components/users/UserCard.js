import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./gem.png')} alt="My gem" /> */}
          </picture>
          <h3>Client Name: <span className="card-clientName">Shelly</span></h3>
          <p>prefered designer: Aryn</p>
        </div>
      </div>
    );
  }
}

export default UserCard;