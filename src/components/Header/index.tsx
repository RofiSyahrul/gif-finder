import Link from 'next/link';

import styles from './styles.module.css';

function ArrowLeftIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.7143 19.5L3 12M10.7143 4.5L3 12M3 12L21 12' stroke='currentColor' strokeWidth='1.5'/>
    </svg>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <ArrowLeftIcon />
          <span>
            Back to Home
          </span>
        </a>
      </Link>
    </header>
  );
}
