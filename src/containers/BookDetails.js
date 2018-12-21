import React, {Component} from 'react'
import ReviewDetails from '../components/ReviewDetails'
import ReviewForm from '../components/ReviewForm'

class BookDetails extends Component {
  render() {
    return(
      <div>
        <img src={this.props.book.img_url} alt={this.props.book.title}/>
      </div>
    )
  }
}

export default BookDetails
