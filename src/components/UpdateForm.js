import React, {Component} from 'react'
import { withRouter } from 'react-router'


class UpdateForm extends Component {
  constructor(){
    super()
    this.state = {
      updatedDetails: ''
    }
  }

  handleTextChange = (e) => {
    this.setState({ updatedDetails: e.target.value })
  }

  handleUpdate = (e) => {
    let date = new Date();
    let submittedDate = date.toLocaleDateString();
    e.preventDefault();

    fetch(`http://localhost:3001/api/v1/reviews/${this.props.selectedReview[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        details: this.state.updatedDetails,
        date: submittedDate,
        reader_id: this.props.selectedReview[0].reader_id,
        book_id: this.props.selectedReview[0].book_id
      })
    }).then(res => res.json())
    .then(updatedRev => {
      this.props.updateReviews()
    }).then(this.props.history.push('/readit/bookshelf'))
  }

  render(){
    console.log(this.props)
    return(
      <div>
      <h2>Update My Review for {this.props.selectedReview[0].book.title}</h2>
        <form className="ui form">
          <div className="field">
            <label>What'd you think?</label>
            <textarea placeholder="Loved it? Hated it? We want to know!" id="reviewDetails" onChange={(e) => this.handleTextChange(e)}>{this.props.selectedReview[0].details}</textarea>
          </div>
            <button className="ui button" type="submit" onClick={this.handleUpdate}>Update Review</button>
        </form>
      </div>
    )
  }
}

export default withRouter(UpdateForm);
