import Isotope from 'isotope-layout';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';
const ProjectIsotop = () => {
  // Isotope
  const isotope = useRef();
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.works-items', {
        itemSelector: '.works-col',
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.works-col',
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <Fragment>
      <div className='works-box' style={{ marginTop: '100px' }}>
        <div className='works-items works-list-items row'>
          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design '>
            <div className='works-item'>
              <Link href='https://weddedgraphy.com.au/' target='_blank'>
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img
                        src='assets/images/weddedgraphy.jpg'
                        alt='Weddedgraphy'
                      />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>Weddedgraphy</span>
                    <span className='category'>
                      Weddedgraphy offers photographers and videographers the
                      opportunities to find quality jobs, anytime, anywhere.
                      Clients can message contractors and book them.
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo '>
            <div className='works-item'>
              <Link href='https://astatsapartments.com/' target='_blank'>
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img
                        src='assets/images/astats-apartments.jpg'
                        alt='Astats Apartments'
                      />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>Astats Apartments</span>
                    <span className='category'>
                      A-Stats is a company that manages luxury short-term
                      rentals with possibilities for mid- and long-term tenancy
                      to maximize return on investment.
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo '>
            <div className='works-item'>
              <Link
                href='https://records.toptierbrandingagency.com'
                target='_blank'
              >
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img
                        src='assets/images/records.jpg'
                        alt='Records Dashboard'
                      />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>
                      TopTier Branding Agency Admin Dashboard
                    </span>
                    <span className='category'>
                      Developed with ReactJS, NodeJS. This is a dashboard for a
                      digital agency to manage jobs, records and communicate in
                      real time.
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design '>
            <div className='works-item'>
              <Link href='https://afmes.org' target='_blank'>
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img
                        src='assets/images/afmes.jpg'
                        alt='Advanced Food Management Emergency Services'
                      />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>A.F.M.E.S</span>
                    <span className='category'>
                      Advanced Food Management Emergency Services aids
                      government agencies, their primary contractors, and
                      corporate partners, and has the capabilities to respond
                      rapidly to support operations throughout North America.
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo '>
            <div className='works-item'>
              <Link href='https://mipielbymia.com/' target='_blank'>
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img
                        src='assets/images/mipielbymia.jpg'
                        alt='Mi Piel by Mia'
                      />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>Mi Piel by Mia</span>
                    <span className='category'>
                      Mi Piel offers a range of skincare and beauty products
                      that turn into wholesome experiences and appeals to the
                      senses with different scents.
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design '>
            <div className='works-item'>
              <Link href='https://vacationohiopyle.com/' target='_blank'>
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img
                        src='assets/images/vacation-ohiopyle.jpg'
                        alt='Vacation Ohiopyle'
                      />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>Vacation Ohiopyle</span>
                    <span className='category'>
                      Welcome to the Laurel Highlands!
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo '>
            <div className='works-item'>
              <Link href='https://kiddiesexpress.com/' target='_blank'>
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img
                        src='assets/images/kiddiesexpress.jpg'
                        alt='Kiddies Express'
                      />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>Kiddies Express</span>
                    <span className='category'>
                      Shop for the best Toys, Boys Fashion, Girls Fashion, Back
                      to School Sets, Health and Lifestyle, Books and a lot
                      more.
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo '>
            <div className='works-item'>
              <Link
                href='https://www.upwork.com/fl/~0195c6d3b87b80a5b4?p=1323314290461761536'
                target='_blank'
              >
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img src='assets/images/netzao.jpg' alt='Netzao' />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>Netzao</span>
                    <span className='category'>
                      Netzao is a Canadian Real Estate Network. It is a
                      FullStack Project and has a lot of features which includes
                      an authentication and account system, memberships, payment
                      integration, interactive maps, listings and automated
                      property markers.
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          <div className='works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo '>
            <div className='works-item'>
              <Link
                href='https://codepen.io/abasimfon/full/VwePoBe'
                target='_blank'
              >
                <a target='_blank'>
                  <span className='image'>
                    <span className='img'>
                      <img
                        src='assets/images/tictactoe.png'
                        alt='Tic Tac Toe'
                      />
                      <span className='overlay' />
                    </span>
                  </span>
                  <span className='desc'>
                    <span className='name'>Tic Tac Toe</span>
                    <span className='category'>Just for fun!</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectIsotop;
