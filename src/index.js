import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import HelloWorld from './components/helloWord';
// import Test from './components/test';
import Count from './components/Count';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import Product from './Views/Product';

ReactDOM.render(
  <React.StrictMode>
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
