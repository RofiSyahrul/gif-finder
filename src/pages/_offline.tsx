import Head from 'next/head';

import Header from '~/components/Header';
import Label from '~/components/Label';
import manifest from '~/constants/manifest';
import commonStyles from '~/styles/commons.module.css';

const title = 'No internet connection.';

export default function OfflinePage() {
  return (
    <>
      <Head>
        <title>{`${title} | ${manifest.name}`}</title>
      </Head>
      <Header />
      <main className={commonStyles.container}>
        <Label isCentered>
          {title}
        </Label>
      </main>
    </>
  );
}
