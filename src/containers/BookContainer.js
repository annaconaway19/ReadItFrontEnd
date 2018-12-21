import React, {Component} from 'react'
import BookCard from '../components/BookCard'

class BookContainer extends Component {


  render() {
    return (
      <div>
        <div className="book-container">
          <div className="card">{this.props.books.map(book => <BookCard key={book.id} book={book} />)}</div>
        </div>
      </div>
    );
  }
}

export default BookContainer
