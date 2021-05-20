import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import SearchPage from './components/search/SearchPage';
import NavBar from './components/common/NavBar';
import NotFoundPage from './components/NotFoundPage';




function App() {
  return (
      <div className="App">
          <NavBar />
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/search" component={SearchPage} />
              <Route component={NotFoundPage} />
          </Switch>
    </div>
  );
}

export default App;
