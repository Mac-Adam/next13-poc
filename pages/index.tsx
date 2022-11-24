import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <Head>
        <title>Random Things</title>
      </Head>

      <div>
        {data.things.map((thing: any) => (
          <p key={thing.id}>
            Name: {thing.name} Amount: {thing.amount}
          </p>
        ))}
      </div>
    </div>
  );
}
