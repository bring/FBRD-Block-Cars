import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './common/Header';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceUserPage from './pages/ServiceUserPage';
import GovernmentPage from './pages/Gov';
import getWeb3 from './api/web3';
import Web3 from 'web3';

const {
  modules,
} = Web3;

const App: React.FC = () => {
  
  const [web3Reference, setWeb3Reference] = useState<Web3 | null>(null);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    console.log("web3Reference: ", web3Reference);
    console.log("accountAddress: " + accountAddress);
  })

  useEffect(() => {
    getWeb3().then((web3: any) => {
      web3.eth
          .getAccounts()
          .then((accounts: string) => setAccountAddress(accounts[0]))
                setWeb3Reference(web3)
    });
  }, []);


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
