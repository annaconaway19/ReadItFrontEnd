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
    bookReviews: []
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
      bookReviews: reviews }))
  }


  onSelectBook = (bookObj) => {
    this.setState({ selectedBook: bookObj }, () => console.log(this.state.selectedBook))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path='/readit' component={Login} />
            <Route exact path='/readit/bookshelf' render={() => <BookContainer books={this.state.allBooks} onSelectBook={this.onSelectBook}/>} />
            <Route exact path='/reviews' render={() => <ReviewContainer bookReviews={this.state.bookReviews} addReview={this.addReview}/>} />
            <Route exact path='/readers/:username' component={ReaderProfile}/>
            <Route path='/books/:id' render={() => {
              return <BookDetails addReview={this.addReview} book={this.state.selectedBook} /> }} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
