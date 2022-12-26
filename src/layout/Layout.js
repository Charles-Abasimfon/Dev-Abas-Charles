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
const Layout = ({ children, extraWrapClass }) => {
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
