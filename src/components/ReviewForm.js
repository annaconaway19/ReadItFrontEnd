import React, { Component } from 'react'

class ReviewForm extends Component {
  constructor() {
    super()
    this.state = {
      reviewDetails: '',
      bookTitle: '',
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  handleSubmit = (e) => {
    debugger
    fetch('http://localhost:3001/reviews', {
      method: 'POST',
      headers: {
        "Content-type":'application/json'
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
    .then(newRev => console.log(newRev))
    e.preventDefault();
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>What'd you think?</label>
          <textarea placeholder="Loved it? Hated it? We want to know!" name="reviewDetails" value={this.state.reviewDetails} onChange={this.handleChange}></textarea>
        </div>
        <div className='field'>
          <label>Book Title</label>
          <input type="text" name='bookTitle' placeholder="Book Title" value={this.state.bookTitle} onChange={this.handleChange}/>
        </div>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
        </div>
          <button className="ui button" type="submit">Submit</button>
      </form>
      )
    }
  }

export default ReviewForm
