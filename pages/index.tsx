import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { useUser, getAccessToken } from '@auth0/nextjs-auth0';
const AllDrinksQuery = gql`
  query {
    things {
      id
      name
      amount
    }
  }
`;
export default function Home({}) {
  const { data, loading, error } = useQuery(AllDrinksQuery);

  const { user, error: erroru, isLoading: isLoadingu } = useUser();

  if (loading || isLoadingu) return <div>Loading...</div>;
  if (error || erroru)
    return (
      <div>
        You must be loged in to view this data <a href="/api/auth/login">Login</a>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Random Things</title>
      </Head>
      <a href="/api/auth/logout">Logout</a>
      <div>
        {data.things.map((thing: any) => (
          <p key={thing.id}>
            Name: {thing.name} Amount: {thing.amount}
          </p>
        ))}
      </div>
      User: {user?.name}
    </div>
  );
}
