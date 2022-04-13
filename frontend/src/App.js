import React from 'react'

//Global Style
import GlobalStyle from './components/GlobalStyle';

// Roteamento
import { Route, Switch } from 'react-router-dom'

// Components
import AboutUS from './pages/AboutUs'
import Portfolio from './pages/Portfolio';
import ContacMe from './pages/ContactMe';
import Nav from './components/Nav';


function App() {
  return (
    <div >
      <GlobalStyle />
      <Nav />
      < Switch>
        <Route exact path="/">
          <AboutUS />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/ContactMe'>
          <ContacMe />
        </Route>
      </ Switch>
    </div>
  );
}

export default App;
