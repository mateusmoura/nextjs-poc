import React from 'react';
import Image from 'next/image';
import { useAmp } from 'next/amp';

import
{
  Grid,
  Container,
  Header as HeaderSemantic,
} from 'semantic-ui-react'

import Header from '../components/Header';
import MenuPrincial from '../components/MenuPrincial';

import styles from '../styles/Home.module.css';

export const config = { amp: 'hybrid' };

export default function Home()
{
  const isAmp = useAmp();

  return (
    <div className={styles.container}>
      <Header title='Home POC' />

      <MenuPrincial />

      <Container text textAlign="center" style={{ marginTop: '7em' }}>
        <Grid divided stackable>
          <Grid.Column width={3}>
            <HeaderSemantic as='h2' content='Notícia 01' />
            <p>
              Extra conteúdo do POST
            </p>
          </Grid.Column>

          <Grid.Column width={3}>
            <HeaderSemantic as='h2' content='Notícia 02' color="#000" />
            <p>
              Extra conteúdo do POST
            </p>
          </Grid.Column>
        </Grid>
      </Container>

      <footer className={styles.footer}>
        <a
          href='https://www.metropoles.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          {isAmp ? (
            <amp-img
              width={100}
              height={100}
              src='/images/general/header-logo.svg'
              alt='Metrópoles Logo'
              layout='responsive'
              className={styles.logo}
            ></amp-img>
          ) : (
            <Image
              width={100}
              height={100}
              src='/images/general/header-logo.svg'
              alt='Metrópoles Logo'
              className={styles.logo}
            />
          )}
        </a>
      </footer>
    </div>
  );
}
