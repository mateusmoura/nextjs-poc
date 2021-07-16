import React from 'react';
import Head from 'next/head';

const Header = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel='icon' href='/favicon.ico' />
    <script
      async
      data-ad-client='ca-pub-6455703356617422'
      src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    ></script>
  </Head>
);

export default Header;
