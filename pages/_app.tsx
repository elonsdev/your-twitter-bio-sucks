import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
