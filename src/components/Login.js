import React, { Component } from 'react'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e, { name, value}) => {
    this.setState({ [name]: value });
  }

  handleLogin = () => {
    fetch(`http://localhost:3001/api/v1/login`, {
      method:"POST",
      headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(res => res.json())
    .then(data => {
      if(data.error){
        alert('Incorrect username or password')
      }else{
        console.log(data)
        this.props.setCurrentReader(data.user_info)
        localStorage.setItem('token', data.token)
      }
    })
  };


  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
        </div>
        <button className="ui button" type="submit">Sign In</button>
      </form>
    )
  }
}

export default Login
