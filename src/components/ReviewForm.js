import React, { Component } from 'react'

class ReviewForm extends Component {
  constructor() {
    super()
    this.state = {
      reviewDetails: '',
      bookTitle: '',
      username: ''
    }
  }

  handleChange = (e) => {
    e.persist();
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault();
    fetch('http://localhost:3001/reviews', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        details: this.state.reviewDetails,
        reader: {
          username: this.state.username
          },
        book: {
          title: this.state.bookTitle
        }
      })
    }).then(res => res.json())
    .then(newRev => this.props.addReview(newRev))
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>What'd you think?</label>
          <textarea placeholder="Loved it? Hated it? We want to know!" id="reviewDetails" value={this.state.reviewDetails} onChange={this.handleChange}></textarea>
        </div>
        <div className='field'>
          <label>Book Title</label>
          <input type="text" id='bookTitle' placeholder="Book Title" value={this.state.bookTitle} onChange={this.handleChange}/>
        </div>
        <div className="field">
          <label>Username</label>
          <input type="text" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
        </div>
          <button className="ui button" type="submit">Submit</button>
      </form>
      )
    }
  }

export default ReviewForm
