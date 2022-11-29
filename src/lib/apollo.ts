import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://next13-poc-hosting-test-q6w4.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
