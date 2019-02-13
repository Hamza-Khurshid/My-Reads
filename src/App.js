import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Header from './components/Header';
import Reading from './components/Reading';
import Book from './components/Reading/Book';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Reading />
        <Book className='book'/>
      </div>
    );
  }
}

export default hot(module)(App);
