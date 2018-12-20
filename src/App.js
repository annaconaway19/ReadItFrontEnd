import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import BookContainer from './containers/BookContainer'

class App extends Component {

  state = {
    allBooks: []
  }

  render() {
    return (
      <div>
        Home Page
        <NavBar />
        <BookContainer />
      </div>
    );
  }
}

export default App;
