// STYLE
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/system.css";

// LIBRARY
import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
// APP

type LayoutProps = {
  children: ReactNode;
};

type NextComponentWithLayout = {
  Layout?: React.ComponentType;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const LayoutApp =
    (Component as NextComponentWithLayout)?.Layout || EmptyLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

const EmptyLayout = ({ children }: LayoutProps) => <>{children}</>;
export default MyApp;
