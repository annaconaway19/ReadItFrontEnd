import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Redirect } from 'react-router-dom'
import NavBar from './components/NavBar';
import BookContainer from './containers/BookContainer';
import ReviewContainer from './containers/ReviewContainer';
import ReaderProfile from './containers/ReaderProfile';
import Login from './components/Login'
import BookDetails from './containers/BookDetails'
import UpdateForm from './components/UpdateForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
constructor() {
  super()
  this.state = {
    allBooks: [],
    selectedBook: '',
    bookReviews: [],
    searchText: '',
    currentReader: null,
    selectedReview: null
  }
}

  componentDidMount() {
    this.setLoginToken()
    Promise.all([
      fetch('http://localhost:3001/api/v1/books'),
      fetch('http://localhost:3001/api/v1/reviews')
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([books, reviews]) => this.setState({
      allBooks: books,
      bookReviews: reviews
     })
   )}

   setLoginToken = () => {
     let token = localStorage.getItem('token')
     if (token) {
       fetch(`http://localhost:3001/api/v1/profile`, {
         method: "GET",
         headers: {
           "Authentication": `Bearer ${token}`
         }
       }).then(res => res.json())
       .then(data => {
         this.setState({ currentReader: data.reader})
       })
     } else {
       console.log('must log in')
     }
   }


  setCurrentReader = (readerObj) => {
     this.setState({ currentReader: readerObj })
   }

  onSelectBook = (bookObj) => {
    this.setState({ selectedBook: bookObj }, () => console.log(this.state.selectedBook))
  }

  searchBooks = (e) => {
    this.setState({searchText: e.currentTarget.value})
  }

  filteredBooks = () => {
    return this.state.allBooks.filter(book => book.title.includes(this.state.searchText))
  }

  addReview = (review) => {
     this.setState({
       bookReviews: [review, ...this.state.bookReviews]
     })
   }

  removeReview = (reviewId) => {
    fetch(`http://localhost:3001/api/v1/reviews/${reviewId}`, {
      method: "DELETE",
    }).then(res => res.json())
    .then(data => {
      let newRevs = this.state.bookReviews.filter(rev => rev.id != reviewId)
      this.setState({ bookReviews: newRevs })
    })
  }

  handleEditClick = (e) => {
    let reviewId = e.currentTarget.id
    let reviewToEdit = this.state.bookReviews.filter(rev => rev.id === parseInt(reviewId))
    this.setState({ selectedReview: reviewToEdit })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar logged_in={this.state.currentReader} setCurrentReader={this.setCurrentReader}/>
              <Route exact path='/readit/login' render={() => (this.state.currentReader ?
                  <Redirect to="/readit/bookshelf" /> :
                  <Login setCurrentReader={this.setCurrentReader} /> )}
                />
              <Route exact path='/readit/bookshelf' render={() =>
                  <BookContainer onChange={this.searchBooks} books={this.filteredBooks()} onSelectBook={this.onSelectBook}/>}
                />
              <Route exact path='/readit/reviews' render={() =>
                  <ReviewContainer reader={this.state.currentReader} allBooks={this.state.allBooks} bookReviews={this.state.bookReviews} addReview={this.addReview} onDelete={this.removeReview} onEdit={this.handleEditClick}/>}
              />
              <Route exact path='/readit/reviews/:id' render={(props) => {
                let reviewId = props.match.params.id
                return <UpdateForm selectedReview={this.state.selectedReview}/>}} />

              <Route exact path='/readit/profile' render={() =>
                <ReaderProfile currentReader={this.state.currentReader}/> }
              />
              <Route exact path='/readit/books/:id' render={(props) => {
                  let bookId = props.match.params.id
                  return <BookDetails reader={this.state.currentReader} book={this.state.allBooks.find(book => book.id == bookId)} allBooks={this.state.allBooks} addReview={this.addReview}/>
                  }}
              />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
