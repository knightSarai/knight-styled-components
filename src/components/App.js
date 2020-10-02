import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from '../styles/global';
import {theme} from '../styles/theme';

import AppBar from './AppBar';
import Slider from './Slider'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppBar/>
      <Slider/>
      <Switch>
        <Route exact path="/"/>
      </Switch>
    </ThemeProvider>
    
  );
}

export default App;
