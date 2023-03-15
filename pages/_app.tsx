import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=''>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default MyApp;
