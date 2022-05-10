import '~/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import manifest from '~/constants/manifest';

const appleIconSizes = ['152', '144', '120', '114', '76', '72', '60', '57'];
const msImageSizes = Object.keys(manifest.icon.msTile);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        {appleIconSizes.map((size) => (
          <link
            key={size}
            rel='apple-touch-icon'
            sizes={`${size}x${size}`}
            href={`/icons/apple-touch-icon-${size}x${size}.png`}
          />
        ))}
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icons/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='384x384' href='/icons/android-chrome-384x384.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          href='/icons/safari-pinned-tab.svg'
          color={manifest.themeColor}
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='apple-mobile-web-app-title' content={manifest.name} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='application-name' content={manifest.name} />
        <meta name='msapplication-navbutton-color' content={manifest.themeColor} />
        <meta name='msapplication-TileColor' content={manifest.backgroundColor} />
        <meta name='msapplication-starturl' content='/' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='theme-color' content={manifest.themeColor} />
        {msImageSizes.map((size) => (
          <meta key={size} name='msapplication-TileImage' content={`/icons/mstile-${size}.png`} />
        ))}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
