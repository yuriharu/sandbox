import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/******** Components ***************************/
import Home from './components/Home.js';
import CodingChecks from './components/CodingChecks.js';
import AnalysisChecks from './components/AnalysisChecks.js';
import MarketingChecks from './components/MarketingChecks.js';
import GeneralChecks from './components/GeneralChecks.js';

/******** Routes ***************************/
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/coding-check"><CodingChecks /></Route>
          <Route exact path="/analysis-check"><AnalysisChecks /></Route>
          <Route exact path="/marketing-check"><MarketingChecks /></Route>
          <Route exact path="/general-check"><GeneralChecks /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);