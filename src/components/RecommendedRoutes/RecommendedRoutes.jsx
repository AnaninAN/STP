import './RecommendedRoutes.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { RouteList } from 'components/RouteList';

export class RecommendedRoutes extends Component {
  state = {
    routes: [
      {
        sequence: [
          "5db5e70864efda37fcfc3354",
          "5db5ec747d1dea37fc60c254",
          "5db5e9927d1dea37fc60c252",
          "5db5ed267d1dea37fc60c255",
          "5db5ee427d1dea37fc60c257",
          "5db5eddf7d1dea37fc60c256",
          "5db5eec87d1dea37fc60c258",
          "5db5efd47d1dea37fc60c259",
          "5db5f0d27d1dea37fc60c25b",
          "5db5f0607d1dea37fc60c25a",
          "5db5e9927d1dea37fc60c252"
        ],
        _id: "5db5f3a964efda37fcfc3359",
        coords: [
          55,
          37
        ],
        zoom: 15,
        total_cost: 1150,
        total_days: 3,
        name: "Уикенд в Париже"
      },
      {
        sequence: [
          "111"
        ],
        _id: "5dbdd5961c9d440000cb9e04",
        total_cost: 100,
        total_days: 3,
        name: "Париж — Барселона"
      },
      {
        sequence: [
          "111"
        ],
        _id: "5dbdd9b21c9d440000cb9e06",
        total_cost: 100,
        total_days: 3,
        name: "Париж — Прага"
      },
      {
        sequence: [
          "111"
        ],
        _id: "5dbdda011c9d440000cb9e08",
        total_cost: 100,
        total_days: 3,
        name: "Копенгаген — Осло"
      },
      {
        sequence: [
          "111"
        ],
        _id: "5dbdda501c9d440000cb9e0a",
        total_cost: 100,
        total_days: 3,
        name: "Неделя в Токио"
      }
    ],
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

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