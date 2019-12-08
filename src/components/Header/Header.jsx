import './Header.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Row className="justify-content-between">
            <Col md="1">
                <Link to="/">Главная</Link>
            </Col>
            <Col md="2">
              <Link to="/myroutes">Мои маршруты</Link>
            </Col>
            <Col md="1">
              <Link to="/login">Войти</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}