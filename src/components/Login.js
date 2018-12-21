import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Username</label>
          <input type="text" name="first-name" placeholder="Username" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="last-name" placeholder="Password" />
        </div>
        <button className="ui button" type="submit">Sign In</button>
      </form>
    )
  }
}

export default Login
