import React, {Component} from 'react'
import ReviewDetails from '../components/ReviewDetails'
import ReviewForm from '../components/ReviewForm'
import {Link} from 'react-router-dom'

class BookDetails extends Component {


  render() {
    return(
      <div>
        <div className = "ui card" >
            <Link to={`/books/${this.props.book.id}`} className='image'>
              <img alt='' src={this.props.book.img_url} id={this.props.book.id}/>
            </Link>
          <div className="content">
            <a className="header">{this.props.book.title}</a>
          </div>
          <div className="content">
            By: {this.props.book.author}
            <p>{this.props.book.genre}</p>
          </div>
        </div>

        <div className="ui segment">
          <h4>ReadIt's Take:</h4>
          <p> {this.props.book.description}</p>
        </div>
        <div>
          <h4>Reviews about {this.props.book.title}:</h4>
          {this.props.book.reviews ? this.props.book.reviews.map(rev =>
            <ul>
              <li key={rev.id}>"{rev.details}"  by: </li>
            </ul>)  : "No reviews yet!"}
        </div>
        <ReviewForm addReview={this.props.addReview}/>

      </div>
    )
  }
}

export default BookDetails
