import React from 'react';
import {Button} from 'semantic-ui-react';
import {ApolloProvider} from '@apollo/client';
import client from './config/apollo';

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="app">
      <h2>holaa</h2>
      <Button>Holaaa</Button>
    </div>
    </ApolloProvider>
  );
}

export default App;
