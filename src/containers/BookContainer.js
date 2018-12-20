import React, {Component} from 'react'
import BookCard from '../components/BookCard'

class BookContainer extends Component {


  render() {
    return (
      <div>
        <div className="ui grid">
          {this.props.books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    );
  }
}

export default BookContainer
