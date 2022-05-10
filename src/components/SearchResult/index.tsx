import Head from 'next/head';
import Image from 'next/image';

import Label from '~/components/Label';
import type { GifImageCompleteAttribute } from '~/types/gif';

import styles from './styles.module.css';

interface SearchResultProps {
  gifQuery?: string;
  images: GifImageCompleteAttribute[];
}

const shimmer = (width: string, height: string) => `
<svg
  width="${width}"
  height="${height}"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#333" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate
    xlink:href="#r"
    attributeName="x"
    from="-${width}"
    to="${width}"
    dur="1s"
    repeatCount="indefinite" 
  />
</svg>
`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function SearchResult({ gifQuery, images }: SearchResultProps) {
  const title = gifQuery ? `Search result for "${gifQuery}"` : 'Trending GIFs today';
  return (
    <main className={styles.container}>
      <Head>
        <title>
          {`${title} | GIF Finder`}
        </title>
      </Head>
      <Label>
        {title}
      </Label>
      <div className={styles.grid}>
        {images.map(image => (
          <a
            key={image.url}
            href={image.gifURL}
            target='_blank'
            rel='noopener noreferrer'
            title={image.title}
          >
            <Image
              alt={image.title}
              src={image.url}
              width={image.width}
              height={image.height}
              loading='lazy'
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(image.width, image.height))}`}
              objectFit='contain'
            />
          </a>
        ))}
      </div>
    </main>
  );
}
