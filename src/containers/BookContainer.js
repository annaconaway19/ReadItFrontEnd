import React, {Component} from 'react'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'

class BookContainer extends Component {
    render() {
    return (
        <div className="book-container">
          <div> <SearchBar onChange={this.props.onChange}/></div>
          <div id="container" className="card">{this.props.books.map(book => <BookCard key={book.id} book={book} onSelectBook={this.props.onSelectBook}/>)}</div>
        </div>
    );
  }
}

export default BookContainer
