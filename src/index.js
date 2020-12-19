import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
// import HelloWorld from './components/helloWord';
// import Test from './components/test';
import Count from './components/Count';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Header />
      <Count name="" />
      <Switch>
        <Route exact path="/">
          <h1>This is Homepage</h1>
        </Route>
        <Route path="/product">
          <h1>This is Product page</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
