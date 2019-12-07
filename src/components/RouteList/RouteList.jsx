import './RouteList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RouteSingle, routeType } from 'components/RouteSingle';

export class RouteList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape(routeType),
    ),
  };

  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        {items.map((item, idx) => <RouteSingle key={idx} {...item} li={idx} />)}
      </React.Fragment>
    );
  }
}