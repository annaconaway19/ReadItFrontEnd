import React, {Component} from 'react'

class ReviewDetails extends Component {

  // for each review, in book reviews, map over it and list the details and userName

  render() {
    return (
      <div>
        <p>{this.props.review.details}</p>
        By: {this.props.review.reader.username} on {this.props.review.date}
      </div>
    )
  }
}

export default ReviewDetails
