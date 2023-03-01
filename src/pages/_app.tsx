import "../styles/globals.css";
import "../styles/style.css";
import "../styles/system.css";
import "../styles/grid.css";

import { Provider } from "react-redux";

import store from "../app/store";
import { AppProps } from "next/app";
import { ApolloProvider, useApolloClient } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApolloClient(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
