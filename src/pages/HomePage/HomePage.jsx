import './HomePage.scss';

import React, { Component } from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { LogoStp } from 'components/LogoStp';
import { RecommendedRoutes } from 'components/RecommendedRoutes';
import { RouteBuildingForm } from 'components/RouteBuildingForm';

export class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <LogoStp />
        <RouteBuildingForm />
        <RecommendedRoutes />
      </React.Fragment>
    );
  }
}