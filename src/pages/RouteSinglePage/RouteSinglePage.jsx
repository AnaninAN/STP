import React, { Component } from 'react';

export class RouteSinglePage extends Component {
  state = {
    route: {},
  };

  componentWillMount() {
    const { match } = this.props;

    fetch(`http://localhost:8888/routes/${match.params.id}`)
      .then((request) => request.json())
      .then((route) => {
        this.setState({
          route
        });
      });
  }

  render() {
    const { route } = this.state;

    return (
      <div>
        {route.name}
      </div>
    );
  }
}