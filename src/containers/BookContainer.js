import React from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'

const BookContainer = ({ books, onSelectBook }) => {
    return (
        <div className="book-container">
          <div> <SearchBar /></div>
          <div className="card">{books.map(book => <BookCard key={book.id} book={book} onSelectBook={onSelectBook}/>)}</div>
        </div>
    );
}

export default BookContainer
