import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';

import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        subdomainName: "nextjs",
        appId: "589b8b0a-7b5a-48b1-b36e-26a4ff1aede8",
        safari_web_id: "web.onesignal.auto.58b504fd-a471-4836-bd65-020899577e4e",
        notifyButton: {
          enable: true,
        },
      });
    });
  }, []);

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
          <Image
            src='/vercel.svg'
            unoptimized={true}
            width={100}
            height={100}
            alt='Vercel Logo'
            className={styles.logo}
          />
        </a>
      </footer>

      <script
        src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'
        async=''
      ></script>
    </div>
  );
}
