import '../style/globals.css'
import { withUrqlClient } from 'next-urql';
import { useQuery } from "urql"

const Query = `
  query {
    Langs {
      id
      langName
    }
  }
`

const MyApp = ({ Component, pageProps }) => {
  const [result, reexecuteQuery] = useQuery({
    query: Query,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data)
  return (
    <Component {...pageProps} />
    )
  }

export default withUrqlClient ((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: 'http://localhost:4000/graphql',
}))(MyApp);