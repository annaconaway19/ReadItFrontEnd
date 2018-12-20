import React, { Component } from 'react';
import './App.css';
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
    .then(books => console.log(books))
  }

  render() {
    return (
      <div className="App">
        ReadIt
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path='/readit' component={BookContainer} />
            <Route exact path='/reviews' component={ReviewContainer} />
            <Route exact path='/readers/:username' component={ReaderProfile}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
