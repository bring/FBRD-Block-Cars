import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from './common/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceUserPage from './pages/ServiceUserPage';
import GovernmentPage from './pages/Gov';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/gov">
            <GovernmentPage />
          </Route>
          <Route path="/user">
            <div>replace with correct component</div>
          </Route>
          <Route path="/service">
            <ServiceUserPage />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
