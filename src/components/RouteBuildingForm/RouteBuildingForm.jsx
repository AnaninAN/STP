import './RouteBuildingForm.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export class RouteBuildingForm extends Component {
  render() {
    return (
      <div className="form-container">
        <form className="needs-validation" noValidate>
          <Container className="d-flex justify-content-center align-item-center">
            <Row className="form-row">
              <Col md="12" className="">
                <label htmlFor="validationCustom01">Интересы</label>
                <input type="text" className="form-control" id="validationCustom01" placeholder="Все направления" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="form-row">
              <Col md="2" mb="2">
                <label htmlFor="validationCustom01">Откуда</label>
                <input type="text" className="form-control" id="validationCustom01" placeholder="Введите место" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </Col>
              <Col md="2" mb="2">
                <label htmlFor="validationCustom02">Куда</label>
                <input type="text" className="form-control" id="validationCustom02" placeholder="Введите место" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </Col>
              <Col md="2" mb="2">
                <label htmlFor="validationCustom04">Прибываем</label>
                <input type="text" className="form-control" id="validationCustom04" placeholder="01/01/2020" required />
                <div className="invalid-feedback">
                  Please provide a valid date.
                </div>
              </Col>
              <Col md="2" mb="2">
                <label htmlFor="validationCustom05">Уезжаем</label>
                <input type="text" className="form-control" id="validationCustom05" placeholder="08/01/2020" required />
                <div className="invalid-feedback">
                  Please provide a valid date.
                </div>
              </Col>
              <Col md="2" mb="2">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Туристы</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </Col>
              <Col md="2" mb="2">
                <label htmlFor="validationCustom05">Бюджет</label>
                <input type="text" className="form-control" id="validationCustom06" placeholder="введите в RUB" required />
                <div className="invalid-feedback">
                  Please provide a valid amount.
                </div>
              </Col>
            </Row>
        </Container>
        <Container className="d-flex justify-content-center align-item-center">
            <button className="btn btn-secondary" type="submit">Построить</button>
        </Container>
        </form>
      </div>
    );
  }
}