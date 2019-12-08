import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { routes } from 'src/routes';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}