import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import BookContainer from './containers/BookContainer'
import ReviewContainer from './containers/ReviewContainer'
import ReaderProfile from './containers/ReaderProfile'

class App extends Component {

  state = {
    allBooks: []
  }

  render() {
    return (
      <div>
        ReadIt
        <NavBar />
        <BookContainer />
        <ReviewContainer />
        <ReaderProfile />
      </div>
    );
  }
}

export default App;
