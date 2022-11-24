import { ApolloProvider } from '@apollo/client';
import apolloClient from '../src/lib/apollo';

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
