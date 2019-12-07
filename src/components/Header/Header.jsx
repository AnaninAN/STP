import './Header.scss';

import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Row className="justify-content-between">
            <Col md="1">
                <a href="#">Главная</a>
            </Col>
            <Col md="2">
              <a href="#">Мои маршруты</a>
            </Col>
            <Col md="1">
              <a href="#">Войти</a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}