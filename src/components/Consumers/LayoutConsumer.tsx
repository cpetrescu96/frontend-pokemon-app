import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import Layout from '../../containers/Layout/Layout';

export class LayoutConsumer extends Component {
  render() {
    return (
      <ApolloConsumer>{client => <Layout client={client} />}</ApolloConsumer>
    );
  }
}

export default LayoutConsumer;
