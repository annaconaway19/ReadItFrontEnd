import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar';
import BookContainer from './containers/BookContainer';
import ReviewContainer from './containers/ReviewContainer';
import ReaderProfile from './containers/ReaderProfile';
import Login from './components/Login'
import BookDetails from './containers/BookDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
constructor() {
  super()
  this.state = {
    allBooks: [],
    selectedBook: '',
    bookReviews: [],
    searchText: ''
  }
}

  addReview = (review) => {
    this.setState({
      bookReviews: [review, ...this.state.bookReviews]
    })
  }

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:3001/books'),
      fetch('http://localhost:3001/reviews')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([books, reviews]) => this.setState({
      allBooks: books,
      bookReviews: reviews
     })
   )}


  onSelectBook = (bookObj) => {
    this.setState({ selectedBook: bookObj }, () => console.log(this.state.selectedBook))
  }

  searchBooks = (e) => {
    this.setState({searchText: e.currentTarget.value})
  }

  filteredBooks = () => {
    return this.state.allBooks.filter(book => book.title.includes(this.state.searchText))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
              <Route exact path='/readit/login' component={Login} />
              <Route exact path='/readit/bookshelf' render={() => <BookContainer onChange={this.searchBooks} books={this.filteredBooks()} onSelectBook={this.onSelectBook}/>} />
              <Route exact path='/readit/reviews' render={() => <ReviewContainer allBooks={this.state.allBooks} bookReviews={this.state.bookReviews} addReview={this.addReview}/>} />
              <Route exact path='/readit/readers/:username' render={() => <ReaderProfile currentReader={this.state.currentReader}/> }/>
              <Route exact path='/readit/books/:id' render={(props) => {
                let bookId = props.match.params.id
                return <BookDetails book={this.state.allBooks.find(book => book.id == bookId)} allBooks={this.state.allBooks} addReview={this.addReview}/>
                }} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
