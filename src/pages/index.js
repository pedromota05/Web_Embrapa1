import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import { Testeapi } from '../components/HomepageFeatures';
import { Localization } from '../components/HomepageFeatures';
import { Footer } from '../components/HomepageFeatures';
import { Footer_Bottom } from '../components/HomepageFeatures';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="carousel-container container" style={{display: 'flex', justifyContent: 'center'}}>
    <Carousel className="carousel"
    autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true}>
      <div className='carousel-item'>
        <img src="img/slider.png" alt="Slide 1" />
      </div>
      <div className='carousel-item'>
        <img src="img/slider2.png" alt="Slide 2" />
      </div>
    </Carousel>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Testeapi></Testeapi>
      <Localization></Localization>
    </Layout>
    <Footer></Footer>
    <Footer_Bottom></Footer_Bottom>
    </>
  );
}
