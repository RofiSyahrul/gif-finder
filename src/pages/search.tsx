import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import Header from '~/components/Header';
import Label from '~/components/Label';
import { searchGifs } from '~/lib/search-gifs';
import commonStyles from '~/styles/commons.module.css';
import type { GifImageCompleteAttribute } from '~/types/gif';

const SearchResult = dynamic(() => import('~/components/SearchResult'), { ssr: false });

interface LoadingOrNotFoundProps {
  isLoading: boolean;
}

function LoadingOrNotFound({ isLoading }: LoadingOrNotFoundProps) {
  const title = isLoading ? 'Loading...' : 'Not found.';
  return (
    <main className={commonStyles.container}>
      <Head>
        <title>
          {`${title} | GIF Finder`}
        </title>
      </Head>
      <Label isCentered>
        {title}
      </Label>
    </main>
  );
}

export default function SearchResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<GifImageCompleteAttribute[]>([]);
  const [gifQuery, setGifQuery] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const q = query.get('q')?.toString() ?? '';
    searchGifs(q).then(result => {
      setGifQuery(q);
      setImages(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      {(isLoading || images.length === 0) ? (
        <LoadingOrNotFound isLoading={isLoading} />
      ) : (
        <SearchResult gifQuery={gifQuery} images={images} />
      )}
    </>
  );
}
