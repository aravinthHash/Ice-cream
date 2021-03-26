import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './Components/App/App';
import Delivery from './Components/Delivery-Boy/delivery-boy';
import Customer from './Components/Customer/customer';
import Admin from './Components/Admin/admin';
import Login from './Components/Login/Login';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/deliveryboy" component={Delivery} />
      <Route path="/customer" component={Customer} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
