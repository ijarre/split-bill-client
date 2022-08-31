import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContext, AuthProvider } from "../provider/AuthProvider";
import { useContext } from "react";
import { RootProvider } from "../provider/RootProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  );
}

export default MyApp;
