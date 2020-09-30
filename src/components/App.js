import React from 'react';
import AppBar from './AppBar';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Switch>
        <Route exact path="/"/>
      </Switch>
    </div>
  );
}

export default App;
