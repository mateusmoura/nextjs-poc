import React, { useEffect } from 'react';
import Head from 'next/head';

export const config = { amp: 'hybrid' };

import 'semantic-ui-css/semantic.min.css';

const Header = ({ title }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-6XRX1BY1KC');

    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        subdomainName: 'nextjs',
        appId: '589b8b0a-7b5a-48b1-b36e-26a4ff1aede8',
        safari_web_id:
          'web.onesignal.auto.58b504fd-a471-4836-bd65-020899577e4e',
        notifyButton: {
          enable: true,
        },
      });
    });
  }, []);

  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      {/* <script
        async
        crossOrigin='anonymous'
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6455703356617422'
      ></script> */}
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-6XRX1BY1KC'
      ></script>

      <script
        async
        src='https://cdn.onesignal.com/sdks/OneSignalSDK.js'
      ></script>
    </Head>
  );
};

export default Header;
