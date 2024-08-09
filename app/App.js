import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import library from './icons';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={MainContainer}/>
      </BrowserRouter>
    )
  }
}
    
export default App
