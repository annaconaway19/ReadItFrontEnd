import React from 'react'
import BookCard from '../components/BookCard'

const BookContainer = ({ books, onSelectBook }) => {
    return (
        <div className="book-container">
          <div className="card">{books.map(book => <BookCard key={book.id} book={book} onSelectBook={onSelectBook}/>)}</div>
        </div>
    );
}

export default BookContainer
