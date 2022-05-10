import Head from 'next/head';

import Header from '~/components/Header';
import Label from '~/components/Label';
import commonStyles from '~/styles/commons.module.css';

interface ErrorPageProps {
  title?: string;
}

export default function ErrorPage({ title = 'Not found.' }: ErrorPageProps) {
  return (
    <>
      <Head>
        <title>
          {`${title} | GIF Finder`}
        </title>
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
