import React, {Component} from 'react'
import ReviewDetails from '../components/ReviewDetails'

class ReviewContainer extends Component {
  constructor(){
    super()
    this.state = {
      bookReviews: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/reviews')
    .then(res => res.json())
    .then(data => {this.setState({ bookReviews: data })})
  }

  render() {
    return (
      <div>
      <h2>My Reviews</h2>
      {this.state.bookReviews.map(review => <ReviewDetails review={review}/>)}
      </div>
    )
  }
}

export default ReviewContainer
