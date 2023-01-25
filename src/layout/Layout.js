import { Fragment, useEffect, useState } from 'react';
import {
  animation,
  initCursor,
  parallax,
  splittingText,
  stickyNav,
} from '../utils';
import Footer from './Footer';
import Header from './Header';
import PreLoader from './PreLoader';
import Head from 'next/head';
const Layout = ({
  children,
  extraWrapClass,
  pageTitle,
  pageDescription,
  siteName,
  previewImage,
  twitterHandle,
  pageUrl,
}) => {
  useEffect(() => {
    initCursor();
    animation();
    window.addEventListener('scroll', stickyNav);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const srollAnimation = document.querySelectorAll('.scroll-animate');
      srollAnimation.forEach((element) => {
        const elementHeight = element.offsetHeight;
        const width = window.scrollY;
        element.classList.add('animate__active', 'animate__animated');
      });
    }, 500);
  }, []);

  useEffect(() => {
    splittingText();
    parallax();
  }, []);

  const [day, setDay] = useState(true);

  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='description' content={pageDescription} />
        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content={twitterHandle} key='twhandle' />

        {/* Open Graph */}
        <meta property='og:url' content={pageUrl} key='ogurl' />
        <meta property='og:image' content={previewImage} key='ogimage' />
        <meta property='og:site_name' content={siteName} key='ogsitename' />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta
          property='og:description'
          content={pageDescription}
          key='ogdesc'
        />
        <title>{pageTitle}</title>
      </Head>
      <div className='container-page '>
        {/* Preloader */}
        <PreLoader day={day} setDay={setDay} />
        {/* Header */}
        <Header day={day} setDay={setDay} />
        {/* Wrapper */}
        <div className={`wrapper ${extraWrapClass}`}>{children}</div>
        {/* Footer */}
        <Footer />
      </div>
      <div className='cursor'></div>
    </Fragment>
  );
};
export default Layout;
