import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import LayoutConsumer from '../Consumers/LayoutConsumer';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export class Provider extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <LayoutConsumer />
      </ApolloProvider>
    );
  }
}

export default Provider;
