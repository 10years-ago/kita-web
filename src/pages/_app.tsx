import '../style/globals.css'
import { withUrqlClient } from 'next-urql';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
    )
  }

export default withUrqlClient ((_ssrExchange, ctx) => ({
  url: 'http://localhost:4000/graphql',
}))(MyApp);