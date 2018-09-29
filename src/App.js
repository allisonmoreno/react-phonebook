import React, { Component } from 'react';
import './App.css';
import SearchAppBar from './Components/SearchAppBar';
import UsersList from './Components/UsersList';


class App extends Component {
  render() {
    return (
      <div className="main">
        <SearchAppBar />
        <UsersList />
      </div>
    );
  }
}

export default App;
