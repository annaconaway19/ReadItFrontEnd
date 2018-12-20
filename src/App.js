import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar';
import BookContainer from './containers/BookContainer';
import ReviewContainer from './containers/ReviewContainer';
import ReaderProfile from './containers/ReaderProfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  state = {
    allBooks: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/books')
    .then(res => res.json())
    .then(books => this.setState({ allBooks: books }))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path='/readit' render={() => <BookContainer books={this.state.allBooks} />} />
            <Route exact path='/reviews' component={ReviewContainer} />
            <Route exact path='/readers/:username' component={ReaderProfile}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
