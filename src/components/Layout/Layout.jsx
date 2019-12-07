import './Layout.scss';

import React, { Component } from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { LogoStp } from 'components/LogoStp';
import { RecommendedRoutes } from 'components/RecommendedRoutes';
import { RouteBuildingForm } from 'components/RouteBuildingForm';

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <LogoStp />
        <RouteBuildingForm />
        <RecommendedRoutes />
        <Footer />
      </div>
    );
  }
}