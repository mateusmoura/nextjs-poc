import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAmp } from 'next/amp';

import Header from '../components/Header';

import styles from '../styles/Home.module.css';

export const config = { amp: 'hybrid' };

export default function Home() {
  const isAmp = useAmp();

  console.log(`isAmp`, isAmp)

  return (
    <div className={styles.container}>
      <Header title='Home POC' />

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our demo blog!</h1>

        <p>
          You can find more articles on the{' '}
          <Link href='/blog'>
            <a>blog articles page</a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          {isAmp ? (
            <amp-img
              width={100}
              height={100}
              src='/vercel.svg'
              alt='Vercel Logo'
              layout='responsive'
              className={styles.logo}
            ></amp-img>
          ) : (
            <Image
              src='/vercel.svg'
              unoptimized={true}
              width={100}
              height={100}
              alt='Vercel Logo'
              className={styles.logo}
            />
          )}
        </a>
      </footer>
    </div>
  );
}
