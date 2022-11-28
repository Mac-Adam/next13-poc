import { ApolloProvider } from '@apollo/client';
import apolloClient from '../src/lib/apollo';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <UserProvider>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </UserProvider>
    </>
  );
}
