import React, { Component } from 'react'

class ReviewForm extends Component {
  constructor() {
    super()
    this.state = {
      reviewDetails: '',
      chosenBookId: null,
    }
  }

  handleChange = (e) => {
    e.persist();
    this.setState({ [e.target.id]: e.target.value })
  }

  handleBookChange = (e) => {
    let reviewedBook = e.target.value
    let foundBook = this.props.allBooks.filter(book => book.title === reviewedBook)
    let bookId = foundBook[0].id
    this.setState({ chosenBookId: bookId })
  }

  handleSubmit = (e) => {
    let date = new Date();
    let submittedDate = date.toLocaleDateString();
    e.preventDefault();
    fetch('http://localhost:3001/api/v1/reviews', {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        details: this.state.reviewDetails,
     		date: submittedDate,
    		reader_id: this.props.reader.id,
    		book_id: this.state.chosenBookId
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
          <input type="text" id='bookTitle' placeholder="Book Title" onChange={(e) => this.handleBookChange(e)}/>
        </div>
          <button className="ui button" type="submit">Submit</button>
      </form>
      )
    }
  }

export default ReviewForm
