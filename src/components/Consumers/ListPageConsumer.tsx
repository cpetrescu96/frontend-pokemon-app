import React, { Component } from 'react';

import { ApolloConsumer } from 'react-apollo';
import ListPage from '../../containers/ListPage/ListPage';

export class ListPageRoute extends Component {
  render() {
    return (
      <ApolloConsumer>{client => <ListPage client={client} />}</ApolloConsumer>
    );
  }
}

export default ListPageRoute;
