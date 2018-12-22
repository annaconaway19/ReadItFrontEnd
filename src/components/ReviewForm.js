import React, { Component } from 'react'

class ReviewForm extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Leave Your Review</label>
          <textarea placeholder="Tell us what you thought. Don't be shy!"></textarea>
        </div>
        <div className="field">
          <label>Username</label>
          <input type="text" name="user-name" placeholder="Username" />
        </div>
          <button className="ui button" type="submit">Submit</button>
      </form>
      )
    }
  }

export default ReviewForm
