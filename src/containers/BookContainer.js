import React, {Component} from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'

class BookContainer extends Component {


  render() {
    return (
      <div>
        Book Container
        <SearchBar />
        {this.props.books.map(book => <BookCard book={book} />)}
      </div>
    );
  }
}

export default BookContainer
