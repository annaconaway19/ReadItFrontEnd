import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
    return (
        <div className = "ui card">

            <Link to={`/books/${book.id}`} className='image'>
              <img alt='' src={book.img_url} onClick={book.selectedBook}/>
            </Link>

          <div className="content">
            <a className="header">{book.title}</a>
          </div>
          
          <div className="content">
            By: {book.author}
            <p>{book.genre}</p>
          </div>

        </div>
    )
  }


export default BookCard
