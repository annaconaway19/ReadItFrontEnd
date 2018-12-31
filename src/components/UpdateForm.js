import React, {Component} from 'react'

class UpdateForm extends Component {

  handleSubmit = (e, handleBookChange) => {
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

  render(){
    return(
      <div>
      <h2>Update My Review for {this.props.selectedReview[0].book.title}</h2>
        <form className="ui form">
          <div className="field">
            <label>What'd you think?</label>
            <textarea placeholder="Loved it? Hated it? We want to know!" id="reviewDetails" value={this.props.selectedReview[0].details} onChange={this.props.handleChange}>{this.props.selectedReview[0]}</textarea>
          </div>
          <div className='field'>
            <label>Book Title</label>
            <input type="text" id='bookTitle' placeholder="Book Title" value={this.props.selectedReview[0].title} onChange={(e) => this.handleBookChange(e)}/>
          </div>
            <button className="ui button" type="submit">Update Review</button>
        </form>
      </div>
    )
  }
}

export default UpdateForm
