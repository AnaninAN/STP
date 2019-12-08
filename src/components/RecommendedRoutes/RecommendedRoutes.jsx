import './RecommendedRoutes.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { RouteList } from 'components/RouteList';

export class RecommendedRoutes extends Component {
  state = {
    routes: [],
  };

  componentWillMount() {

    fetch('http://localhost:8888/routes')
      .then((request) => request.json())
      .then((routes) => {
        this.setState({
          routes: [...routes]
        });
      });
  }

  render() {
    const { routes } = this.state;

    return (
      <div className="recommended_routes">
        <Container>
          <p className="recommended_routes__title">Мы приготовили лучшие маршруты для Вас</p>
        </Container>
        <Container className="justify-content-around">
          <Row>
            <RouteList items={routes} />
          </Row>
        </Container>
      </div>
    );
  }
}