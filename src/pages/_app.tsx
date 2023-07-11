// STYLE
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/system.css";
// LIBRARY
import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
// APP
import DataInfor from "../types/dataInfor.type";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient());

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
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
