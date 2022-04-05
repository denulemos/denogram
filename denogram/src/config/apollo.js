import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

// Config to connect server with client

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
});

const client = new ApolloClient({
    // to use the devtools of Chrome for apollo
    connectToDevTools: true,
    // To save requests in cache
    cache: new InMemoryCache(),
    link: httpLink
})

export default client;