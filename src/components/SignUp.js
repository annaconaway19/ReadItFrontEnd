import React, {Component} from 'react'
import { Segment } from "semantic-ui-react";

class SignUp extends Component {
  render(){
    return (
      <div>
      <h1>We Came. We Saw. We ReadIt!</h1>
      <Segment className="signup">
      <div className="ui equal width form">
        <div className="fields">
          <div className="field">
            <label>Username</label>
            <input type="text" placeholder="Username"/>
          </div>
          <div className="field">
            <label>Password</label>
            <input placeholder='Password' type="password"/>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>First name</label>
            <input type="text" placeholder="First Name"/>
          </div>
          <div className="field">
            <label>Bio</label>
            <input type="text" placeholder="Tell us about you!"/>
          </div>
        </div>
        <div className="ui submit button">Sign Up</div>
        </div>
      </Segment>
        <h3>“Never trust anyone who has not brought a book with them.” – Lemony Snicket</h3>
      </div>
    )
  }
}

export default SignUp;
