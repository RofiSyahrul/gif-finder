import type { FormEventHandler} from 'react';
import { useCallback } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '~/styles/Home.module.css';

const title = 'GIF Finder';

function Home() {
  const { push } = useRouter();

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(e => {
    const formData = new FormData(e.currentTarget);
    const gifQuery = formData.get('gifQuery')?.toString();
    if (!gifQuery) return;
    push({ pathname: '/search', query: { q: gifQuery }});
  }, [push]);

  return (
    <main className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Find any GIF here' />
      </Head>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input autoComplete='off' autoFocus name='gifQuery' />
      </form>
    </main>
  );
}

export default Home;
