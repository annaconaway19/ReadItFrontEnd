import React, { Component } from 'react'

class ReviewForm extends Component {
  constructor() {
    super()
    this.state = {
      reviewDetails: ''
    }
  }

  handleChange = (e) => {
    e.persist();
    this.setState({ [e.target.id]: e.target.value })
  }

  handleBookChange = (e) => {
    let reviewedBook = e.target.value
    let foundBook = this.props.allBooks.filter(book => book.title === reviewedBook)
    return foundBook[0].id
  }

  handleSubmit = (e) => {
    debugger
    const bookId = e.currentTarget.children[0].value;
    e.preventDefault();
    fetch('http://localhost:3001/reviews', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        details: this.state.reviewDetails,
     		date: 'jan',
    		reader_id: 1,
    		book_id: bookId
      })
    }).then(res => res.json())
    .then(newRev => console.log(newRev))
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
          <input type="text" id='bookTitle' placeholder="Book Title" value={(e) => this.handleBookChange(e)} onChange={(e) => this.handleBookChange(e)}/>
        </div>
        <div className="field">
          <label>Username</label>
          <input type="text" id="username" placeholder="Username" onChange={this.handleChange}/>
        </div>
          <button className="ui button" type="submit">Submit</button>
      </form>
      )
    }
  }

export default ReviewForm
