import React, {Component} from 'react'
import ReviewDetails from '../components/ReviewDetails'
import ReviewForm from '../components/ReviewForm'

class ReviewContainer extends Component {

  render() {
    return (
      <div>
      <h2>My Reviews</h2>
      {this.props.bookReviews.map(review => <ReviewDetails key={review.id} review={review}/>)}
      <h3>Add A New Review!</h3>
      <ReviewForm  allBooks={this.props.allBooks} addReview={this.props.addReview}/>
      </div>
    )
  }
}

export default ReviewContainer
