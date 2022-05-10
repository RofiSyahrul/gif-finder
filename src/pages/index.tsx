import type { FormEventHandler} from 'react';
import { useCallback } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import manifest from '~/constants/manifest';
import styles from '~/styles/Home.module.css';

const imageURL = 'https://res.cloudinary.com/rofi/image/upload/v1640233522/samples/rho-pi.png';

function Home() {
  const { push } = useRouter();

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const gifQuery = formData.get('gifQuery')?.toString();
    const pathname = '/search';
    if (gifQuery) {
      push({ pathname, query: { q: gifQuery }});
    } else {
      push(pathname);
    }
  }, [push]);

  return (
    <main className={styles.container}>
      <Head>
        <title>{manifest.name}</title>
        <meta property='og:title' content={manifest.name} />
        <meta name='twitter:title' content={manifest.name} />
        <meta name='description' content={manifest.description} />
        <meta property='og:description' content={manifest.description} />
        <meta name='twitter:description' content={manifest.description} />
        <meta property='og:image' content={imageURL} />
        <meta name='twitter:image' content={imageURL} />
      </Head>
      <h1>{manifest.name}</h1>
      <form onSubmit={handleSubmit}>
        <input autoComplete='off' autoFocus name='gifQuery' />
      </form>
    </main>
  );
}

export default Home;
