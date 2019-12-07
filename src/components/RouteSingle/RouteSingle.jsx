import './RouteSingle.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Col } from 'react-bootstrap';

export const routeType = {
  sequence: PropTypes.array,
  _id: PropTypes.string,
  coords: PropTypes.array,
  zoom: PropTypes.number,
  total_cost: PropTypes.number,
  total_days: PropTypes.number,
  name: PropTypes.string
};

export class RouteSingle extends Component {
  static propTypes = routeType;

  render() {
    const { name, li } = this.props;

    const mdClass = classNames({
      '4': li < 4,
      'auto': li === 4
    });
    const linkClass = classNames({
      'square': li < 4,
      'rectangle': li === 4
    });

    return (
      <Col md={mdClass} className="route-single">
        <a className={linkClass} href="#">
          {name}
        </a>
      </Col>
    );
  }
}