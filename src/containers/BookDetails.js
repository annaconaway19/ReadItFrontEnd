import React from 'react'
import ReviewDetails from '../components/ReviewDetails'
import ReviewForm from '../components/ReviewForm'

const BookDetails = ({ book, addReview, allBooks }) => {
    return book ?
      <div className="book-details">
        <div id='book-card' className = "ui card" >
              <img alt='' src={book.img_url} id={book.id}/>
          <div className="content">
            <a className="header">{book.title}</a>
          </div>
          <div className="content">
            By: {book.author}
            <p>{book.genre}</p>
          </div>
        </div>

        <div id='readits-take' className="ui segment">
          <h2>ReadIt's Take:</h2>
          <h4 className='readit-desc'> {book.description}</h4>
        </div>
        <div>
          <h4>Reviews about {book.title}:</h4>
          {book.reviews ? book.reviews.map(rev =>
            <div className="ui list" key={rev.id}>
              <a className="item">
                <i className="book icon"></i>
                <div className="content">
                  <div className="header">By {rev.reader.username} on {rev.date}</div>
                  <div className="description">{rev.details}</div>
                </div>
              </a>
            </div>
          )  : "No reviews yet!"}
        </div>
        <ReviewForm allBooks={allBooks} addReview={addReview}/>

      </div>
    : null
  }

export default BookDetails
