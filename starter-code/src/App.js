import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import CountryDetails from './components/CountryDetails'

import countries from './countries.json'

class App extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-5">
          <div class="list-group">
            {countries.map((country) => {
              return (
                <Link to={country.cca3} className="list-group-item list-group-item-action">{country.name.common}</Link>
              )
            })}

          </div>
        </div>
        <div class="col-7">
          <Switch>
            {countries.map((country) => {
              return (
                <Route exact path='/:cca3' component={CountryDetails} />
              )
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
