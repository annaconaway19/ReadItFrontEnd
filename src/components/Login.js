import React from 'react'
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  signUp = () => {
    this.props.history.push('/readit/signup')
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleLoginSubmit = () => {
    console.log('trying to log in')
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
        this.props.setCurrentReader(data.reader_info)
        localStorage.setItem('token', data.token)
      }
    })
  };

  render() {
    return (
      <div className='login-page'>
      <h1>We Came. We Saw. We ReadIt!</h1>

      <Segment className='login'>
        <Form
          onSubmit={this.handleLoginSubmit}
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message
            error
            header={this.props.failedLogin ? this.props.error : null}
          />
          <Form.Group widths="equal">
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
        <button className='ui button signup' type="submit" onClick={this.signUp}>Not A Member? Sign Up</button>

      </Segment>
      <h3>“Books are a uniquely portable magic.” – Stephen King</h3>
      </div>
    );
  }
}

export default withRouter(Login);
