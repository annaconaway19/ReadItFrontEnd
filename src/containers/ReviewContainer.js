import React, {Component} from 'react'
import ReviewDetails from '../components/ReviewDetails'
import ReviewForm from '../components/ReviewForm'
import { withRouter } from 'react-router-dom'


class ReviewContainer extends Component {
  constructor(){
    super()
    this.state = {
      readerReviews: []
    }
  }

  componentDidMount(){
    this.filterReviews()
  }

  filterReviews = () => {
    let reviews = this.props.bookReviews.filter(rev => rev.reader_id === this.props.reader.id)
    this.setState({ readerReviews: reviews })
  }


  render() {
    return (
      <div className="review">
        <h1>My Reviews</h1>
        <div className="review-list">
          { this.state.readerReviews ? this.state.readerReviews.map(review =>
            <ReviewDetails key={review.id} review={review} onEdit={this.props.onEdit} onDelete={this.props.onDelete} renderUpdate={this.props.renderUpdate}/>) : "You have no reviews yet!"}
          </div>

        <h1>Add A New Review!</h1>
        <ReviewForm  reader={this.props.reader} allBooks={this.props.allBooks} addReview={this.props.addReview}/>
      </div>
    )
  }
}

export default withRouter(ReviewContainer);
