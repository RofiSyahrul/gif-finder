import '~/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='manifest' href='/manifest.json' />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link rel='icon' href='/favicon.png' type='image/png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
