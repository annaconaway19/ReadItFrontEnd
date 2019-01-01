import React, { Component, Fragment } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar';
import BookContainer from './containers/BookContainer';
import ReviewContainer from './containers/ReviewContainer';
import ReaderProfile from './containers/ReaderProfile';
import Login from './components/Login'
import BookDetails from './containers/BookDetails'
import UpdateForm from './components/UpdateForm'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'

class App extends Component {
constructor() {
  super()
  this.state = {
    allBooks: [],
    selectedBook: '',
    bookReviews: [],
    searchText: '',
    currentReader: null,
    selectedReview: null,
    rendering: false
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
    this.setState({ selectedReview: reviewToEdit, rendering: true })
  }

  renderUpdate = () => {
    if (this.state.rendering) {
      return <Redirect to='/readit/update'/>
    }
  }

  updateReviews = () => {
    this.setState({
      rendering: false
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <NavBar logged_in={this.state.currentReader} setCurrentReader={this.setCurrentReader}/>
              <Switch>
                <Route exact path='/readit/login' render={() => (this.state.currentReader ?
                    <Redirect to="/readit/bookshelf" /> :
                    <Login setCurrentReader={this.setCurrentReader} /> )}
                  />
                <Route exact path='/readit/bookshelf' render={() =>
                    <BookContainer onChange={this.searchBooks} books={this.filteredBooks()} onSelectBook={this.onSelectBook}/>}
                  />
                <Route exact path='/readit/reviews' render={() =>
                    <ReviewContainer reader={this.state.currentReader}
                    allBooks={this.state.allBooks}
                    bookReviews={this.state.bookReviews}
                    addReview={this.addReview}
                    onDelete={this.removeReview}
                    onEdit={this.handleEditClick}
                    renderUpdate={this.renderUpdate}/>}
                />
                <Route exact path='/readit/update' render={(props) => {
                  let reviewId = props.match.params.id
                  return <UpdateForm reviewDetails={this.state.reviewDetails}
                  selectedReview={this.state.selectedReview}
                  updateReviews={this.updateReviews}/>}} />

                <Route exact path='/readit/profile' render={() =>
                  <ReaderProfile currentReader={this.state.currentReader}/> }
                />
                <Route exact path='/readit/books/:id' render={(props) => {
                    let bookId = props.match.params.id
                    return <BookDetails reader={this.state.currentReader} book={this.state.allBooks.find(book => book.id == bookId)} allBooks={this.state.allBooks} addReview={this.addReview}/>
                    }}
                />
              </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
