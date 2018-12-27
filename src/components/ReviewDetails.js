import React, {Component} from 'react'

class ReviewDetails extends Component {

  render() {
    return (
      <div>
        <p>{this.props.review.details}</p>
        {this.props.review.reader.username} on {this.props.review.date}
        <br></br>
      </div>
    )
  }
}

export default ReviewDetails
