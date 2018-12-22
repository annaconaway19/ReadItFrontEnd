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
    selectedBook: ''
  }
}

  componentDidMount() {
    fetch('http://localhost:3001/books')
    .then(res => res.json())
    .then(books => this.setState({ allBooks: books }))
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
            <Route exact path='/reviews' component={ReviewContainer} />
            <Route exact path='/readers/:username' component={ReaderProfile}/>
            <Route path='/books/:id' render={() => {
              return <BookDetails book={this.state.selectedBook} /> }} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
