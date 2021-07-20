import React from 'react';
import Head from 'next/head';

const Header = ({ title }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-NQRHEP8FM5');
  }, [])

  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <script
        async
        crossOrigin='anonymous'
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6455703356617422'
      ></script>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NQRHEP8FM5"></script>
    </Head>
  );
};

export default Header;
