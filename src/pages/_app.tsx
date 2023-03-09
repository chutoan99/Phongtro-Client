import "../styles/globals.css";
import "../styles/style.css";
import "../styles/system.css";
import "../styles/grid.css";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import store from "../app/store";
import { AppProps } from "next/app";
import React, { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
