import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar';
import BookContainer from './containers/BookContainer';
import ReviewContainer from './containers/ReviewContainer';
import ReaderProfile from './containers/ReaderProfile';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  state = {
    allBooks: [],
    selectedBook: null
  }

  componentDidMount() {
    fetch('http://localhost:3001/books')
    .then(res => res.json())
    .then(books => this.setState({ allBooks: books }))
  }

  onCardClick = (e) => {
    let bookId = e.target.id
    let clickedBook = this.state.allBooks.find(book => book.id === bookId)
    this.setState({ selectedBook: clickedBook })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path='/readit' component={Login} />
            <Route exact path='/readit/bookshelf' render={() => <BookContainer books={this.state.allBooks} onCardClick={this.onCardClick}/>} />
            <Route exact path='/reviews' component={ReviewContainer} />
            <Route exact path='/readers/:username' component={ReaderProfile}/>
            
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
