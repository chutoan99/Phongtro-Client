// STYLE
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/system.css";
// LIBRARY
import React, { ReactNode } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
// APP
import DataInfor from "../types/dataInfor.type";

type LayoutProps = {
  children: ReactNode;
};

type NextComponentWithLayout = {
  Layout?: React.ComponentType;
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());
  const LayoutApp =
    (Component as NextComponentWithLayout)?.Layout || EmptyLayout;

  //? CHECK LOGIN
  if (typeof window !== "undefined") {
    const data: DataInfor = JSON.parse(localStorage.getItem("token"));
    if (
      !data?.token ||
      !data.isLogin ||
      !data.id ||
      data?.token === "undefined"
    )
      return router.push("/login");
  }
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
