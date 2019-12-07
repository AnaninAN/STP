import './LogoStp.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export class LogoStp extends Component {
  render() {
    return (
      <div className="logo">
        <Container>
          <Row className="justify-content-center">
            <p>мы планируем</p>
            <a href="#" className="logo__img"></a>
            <p>вы отдыхаете</p>
          </Row>
          <Row className="justify-content-center">
            <p className="logo__stp">Smart Travel Planner</p>
          </Row>
        </Container>
      </div>
    );
  }
}