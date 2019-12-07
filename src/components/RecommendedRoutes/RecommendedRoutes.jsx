import './RecommendedRoutes.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export class RecommendedRoutes extends Component {
  state = {
    routes: [],
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    return (
      <div className="recommended_routes">
        <Container>
          <p className="recommended_routes__title">Мы приготовили лучшие маршруты для Вас</p>
        </Container>
        <Container className="justify-content-around">
          <Row>
            111
          </Row>
        </Container>
      </div>
    );
  }
}