import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from '../styles/global';
import {theme} from '../styles/theme';

import AppBar from './AppBar';
import {Slider} from './Slider/';
// import {Slider} from './Slider/v2';


function App() {
  /*pass the src in the array */
  const slideImages = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppBar/>
      <Slider slideImages={slideImages}/>
      <Switch>
        <Route exact path="/"/>
      </Switch>
    </ThemeProvider>
    
  );
}

export default App;
