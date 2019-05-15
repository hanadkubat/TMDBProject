import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

//custom components
import Home from './app/Home';
import DetailView from './app/DetailView';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:cat/:id" component={DetailView} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
