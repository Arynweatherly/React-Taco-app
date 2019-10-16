import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import apiManager from '../../modules/apiManager'
import UserCard from '../users/UserCard'
// import './Navbar.css'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

 // Update state whenever an input field is edited
 handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

handleLogin = (e) => {
    e.preventDefault()
    /*
    on 31 it says form onsubmit .... submit refreshes page and we're preventing that 
    24 making object
    25 expecting us to have passed in fxn called setUser which we declared in app so we need to pass in setUser in app
    line 26... its grabbing  min 22
    how do we get history? routes... from router ... need to install if havent 

    npm install react-router-dom --save    install and become dependency (recording min 24)
        For now, just store the email and password that
        the customer enters into local storage.
    */
    let credentials = {email: this.state.email, password: this.state.password} 
    apiManager.searchUsername(this.state.email)//pass in whats in my state then get result and see what it looks like
    .then(result => {
        console.log("what is the result of search", result)
        if (result.length > 0) {
            this.props.setUser(result);
            this.props.history.push("/");

        }else {
            apiManager.addUser(credentials) //go to db gets unique id for user (57 on recording)
            .then(result => {
                console.log("result is", result);
                this.props.setUser(result); 
            })
            this.props.history.push("/"); // why do i not wanna put this here? -
        }
        })
    }




    render() {
        return (
        <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputEmail">Email address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
                Sign in
            </button>
        </fieldset>
      </form>
        )
    }
}

export default withRouter(Login);