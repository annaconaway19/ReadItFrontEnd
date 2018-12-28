import React from 'react'
import ReviewDetails from '../components/ReviewDetails'
import ReviewForm from '../components/ReviewForm'

const BookDetails = ({ book, addReview }) => {
    return book ?
      <div>
        <div className = "ui card" >
              <img alt='' src={book.img_url} id={book.id}/>
          <div className="content">
            <a className="header">{book.title}</a>
          </div>
          <div className="content">
            By: {book.author}
            <p>{book.genre}</p>
          </div>
        </div>

        <div className="ui segment">
          <h4>ReadIt's Take:</h4>
          <p> {book.description}</p>
        </div>
        <div>
          <h4>Reviews about {book.title}:</h4>
          {book.reviews ? book.reviews.map(rev =>
            <ul key={rev.id}>
              <li >"{rev.details}"  by: </li>
            </ul>)  : "No reviews yet!"}
        </div>
        <ReviewForm addReview={addReview}/>

      </div>
    : null
  }

export default BookDetails
