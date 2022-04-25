import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import AhostPage from './pages/a-host/a-host.component';
import './App.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/Ahost' component={AhostPage} />
      </Switch>
    </>
  )
};



export default App;
