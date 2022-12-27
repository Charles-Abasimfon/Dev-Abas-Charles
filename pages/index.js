import dynamic from 'next/dynamic';
import Link from 'next/link';
import ContactForm from '../src/components/ContactForm';
import TestimonialSlider from '../src/components/TestimonialSlider';
import Layout from '../src/layout/Layout';
import homepreviewimg from '../public/assets/images/homemetaimage.jpg';

const ProjectIsotop = dynamic(() => import('../src/components/ProjectIsotop'), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout
      pageTitle='Abasimfon Charles | FullStack Website & App Developer, Designer.'
      pageDescription='I am an Expert Full-Stack Website & Mobile App Developer and Designer with many years of experience in designing and developing outstanding production-ready websites, applications and other software for different industries, brands and businesses.'
      siteName='Abasimfon Charles | Dev. Abas Charles'
      pageUrl='https://www.devabascharles.com'
      previewImage='assets/images/homemetaimage.jpg'
      twitterHandle='@charleey_ab'
    >
      <section className='section section-started'>
        <div className='container'>
          {/* Hero Started */}
          <div className='hero-started'>
            <div className='slide'>
              <img src='assets/images/profile.jpg' alt='' />
              <span className='circle circle-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='749px'
                  height='375px'
                >
                  <path
                    fillRule='evenodd'
                    fill='#ff8059'
                    d='M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 '
                  />
                </svg>
              </span>
              <span className='circle circle-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='416px'
                  height='209px'
                >
                  <path
                    fillRule='evenodd'
                    fill='#3aafc9'
                    d='M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 '
                  />
                </svg>
              </span>
              <span className='circle circle-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='416px'
                  height='209px'
                >
                  <path
                    fillRule='evenodd'
                    fill='#b9d1e4'
                    d='M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 '
                  />
                </svg>
              </span>
              <span className='circle circle-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='121px'
                  height='241px'
                >
                  <path
                    fillRule='evenodd'
                    fill='#676cdb'
                    d='M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 '
                  />
                </svg>
              </span>
              <span className='circle circle-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='232px'
                  height='117px'
                >
                  <path
                    fillRule='evenodd'
                    fill='rgb(255, 208, 65)'
                    d='M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 '
                  />
                </svg>
              </span>
            </div>
            <div className='content'>
              <div className='titles'>
                <div className='subtitle'>FULLSTACK DEVELOPER</div>
                <h2 className='title'>Abas Charles</h2>
              </div>
              <div className='description'>
                <p>
                  I am an Expert Full-Stack Website & Mobile App Developer and
                  Designer with over 13 years of experience in designing and
                  developing outstanding production-ready websites, applications
                  and other software for clients from different backgrounds.
                </p>

                <div className='social-links'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.upwork.com/fl/charlesabas'
                  >
                    <img
                      src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png'
                      style={{ width: '30px', marginTop: '-5px' }}
                      alt='Abasimfon Charles | Upwork Profile'
                    />
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/abascharles'
                  >
                    <img
                      src='https://img.icons8.com/color/512/linkedin.png'
                      style={{ width: '30px', marginTop: '-5px' }}
                      alt='Abasimfon Charles | LinkedIn Profile'
                    />
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/Charles-Abasimfon'
                  >
                    <img
                      src='https://img.icons8.com/sf-black-filled/512/github.png'
                      style={{
                        width: '40px',
                        marginTop: '-7px',
                        marginLeft: '-5px',
                      }}
                      alt='Abasimfon Charles | GitHub Profile'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='info-list'>
              <ul>
                <li>
                  Language
                  <strong>English</strong>
                </li>
                <li>
                  Experience <strong>13+ Years</strong>
                </li>
                <li>
                  Availability <strong>More than 30 hrs/week </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className='section section-bg section-parallax section-parallax-1'
        id='about-section'
      >
        <div className='container'>
          {/* Section Heading */}
          <div className='m-titles'>
            <h2 className='m-title'>About Me</h2>
          </div>
          <div className='row row-custom'>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right'>
              {/* Section numbers */}
              <div className='numbers-items'>
                <div className='numbers-item'>
                  <div className='icon'>
                    <i aria-hidden='true' className='far fa-check-circle' />
                  </div>
                  <div className='num'>224+</div>
                  <div className='title'>
                    Completed <br />
                    Projects
                  </div>
                </div>
                <div className='numbers-item'>
                  <div className='icon'>
                    <i aria-hidden='true' className='far fa-smile-beam' />
                  </div>
                  <div className='num'>38</div>
                  <div className='title'>Certificates</div>
                </div>
                <div className='numbers-item'>
                  <div className='icon'>
                    <i aria-hidden='true' className='far fa-gem' />
                  </div>
                  <div className='num'>18</div>
                  <div className='title'>
                    Awards <br />
                    Won
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
              {/* Section Profile */}
              <div className='profile-box'>
                <div className='text'>
                  <p>
                    My name is Abasimfon Charles Ntuk (Abas Charles). Nice to
                    meet you!
                  </p>
                  <p>
                    Since beginning my journey as a freelance FullStack
                    Developer over 13 years ago, I've worked remotely for
                    agencies, consulted for startups, and collaborated with
                    talented people to create websites, applications and other
                    software for both business and consumer use. I'm quietly
                    confident, naturally curious, and perpetually working on
                    changing the world, one project at a time.
                  </p>
                  <p>
                    Design and Development is not just my job, it's my passion
                    and I pride myself in working hard and delivering the best
                    results on time. While fulfilling my clients’ needs, I have
                    strengthened my ability to understand custom needs and
                    deliver high-end professional solutions. If you’re
                    interested in working with me, send me a message and watch
                    your vision turn into a highly functional
                    website/application. I am also a great team player, ready to
                    jump in and familiarize with any infrastructure and team,
                    from simple to very complex. I’m looking forward to working
                    with you or your team.
                  </p>
                  <p>
                    I am also a great team player, ready to jump in and
                    familiarize with any infrastructure and team, from simple to
                    very complex. I’m looking forward to working with you or
                    your team.
                  </p>
                  <a href='#contact-section' className='btn'>
                    <span>Start a Conversation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='section section-parallax section-parallax-2'
        id='resume-section'
      >
        <div className='container'>
          {/* Section Heading */}
          <div className='m-titles'>
            <h2 className='m-title'>My Resume</h2>
          </div>
          <div className='row row-custom'>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'></div>
            <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
              {/* Skills */}
              <div className='skills-items'>
                <div
                  className='p-title'
                  style={{ paddingTop: '0px', marginTop: '0px' }}
                >
                  SKILLS
                </div>
                <p>
                  <strong>Frontend:</strong> ReactJS, React Native, NextJS,
                  Gatsby, JavaScript, jQuery, Redux, CSS & Sass, HTML, AJAX,
                  Bootstrap, Tailwind CSS, JSX, Typescript, etc.
                </p>
                <p>
                  <strong>Backend:</strong> NodeJS, Express, Strapi CMS, Rest
                  api, etc.
                </p>
                <p>
                  <strong>Database:</strong> MongoDB, MySQL, PostgreSQL, SQLite,
                  DynamoBD, etc.
                </p>
                <p>
                  <strong>Design Tools:</strong> Figma, Adobe XD, Adobe, etc.
                </p>
                <p>
                  <strong>Dev. Tools:</strong> Git, Github, Gitlab, Bitbucket,
                  Firebase, etc.
                </p>
                <p>
                  <strong>CMS:</strong> WordPress Development (Custom Themes,
                  Premium Themes, Page Builders like WPBakery and Elementor,
                  Custom Plugins), Shopify, Squarespace, Web flow, Strapi CMS,
                  etc.
                </p>
                <p>
                  <strong>Deployment &amp; Hosting:</strong> AWS, Heroku,
                  Docker, Vercel, Firebase, Netlify, cPanel, Cloudinary, Digital
                  Ocean, etc.
                </p>
              </div>
              {/* Description */}
              <div className='text'>
                <div className='p-title'>WHY I'M PREFERRED?</div>

                <p>
                  Asides creating an engaging and interactive website/app with a
                  great UI/UX, I can host your website or web application online
                  from Day 1 so you can track my daily progress and request for
                  changes, if any, in real time. I also prioritize speed,
                  responsiveness on multiple screens (mobile friendly),
                  security, easy navigation, scalability, WCAG compliance,
                  search engine optimization (SEO), clean code architecture. I
                  am also available post project completion to provide technical
                  support and revisions.
                </p>
              </div>

              {/* Services */}
              <div className='p-title'>SERVICES</div>
              <div className='services-items'>
                <div className='services-col'>
                  <div className='services-item'>
                    <div className='icon'>
                      <i aria-hidden='true' className='fab fa-chrome' />
                    </div>
                    <div className='title'>Website Development</div>
                    <div className='text'>
                      <p>
                        I like to code and enjoy bringing ideas to life in the
                        browser. I look at websites and web applications I
                        developed and feel really good!.
                      </p>
                    </div>
                    <a href='#contact-section' className='lnk'>
                      let's do this
                    </a>
                  </div>
                </div>
                <div className='services-col'>
                  <div className='services-item'>
                    <div className='icon'>
                      <i aria-hidden='true' className='fab fa-android' />
                    </div>
                    <div className='title'>Mobile Application Development</div>
                    <div className='text'>
                      <p>
                        With React Native, I build cross-platform mobile
                        applications for Android and iOS.
                      </p>
                    </div>
                    <a href='#contact-section' className='lnk'>
                      let's do this
                    </a>
                  </div>
                </div>
                <div className='services-col'>
                  <div className='services-item'>
                    <div className='icon'>
                      <i aria-hidden='true' className='fa fa-cubes' />
                    </div>
                    <div className='title'>Design</div>
                    <div className='text'>
                      <p>
                        I value clean design patterns, thoughtful interactions,
                        perfect color blends.
                      </p>
                    </div>
                    <a href='#contact-section' className='lnk'>
                      let's do this
                    </a>
                  </div>
                </div>
                <div className='services-col'>
                  <div className='services-item'>
                    <div className='icon'>
                      <i aria-hidden='true' className='fas fa-gamepad' />
                    </div>
                    <div className='title'>Game Development</div>
                    <div className='text'>
                      <p>
                        I develop memorable and unique web games, simple android
                        and ios games.
                      </p>
                    </div>
                    <a href='#contact-section' className='lnk'>
                      let's do this
                    </a>
                  </div>
                </div>
              </div>
              {/* History */}
              <div className='history-left'>
                <div className='history-items'>
                  <div className='p-title'>CERTIFICATES</div>
                  <div className='history-item'>
                    <div className='date'>April 30, 2020</div>
                    <div className='name'>Responsive Web Design</div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by freeCodeCamp </span>
                      <i aria-hidden='true' className='fab fa-free-code-camp' />
                    </div>
                    <a
                      href='https://www.freecodecamp.org/certification/charles_abas/responsive-web-design'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                  <div className='history-item'>
                    <div className='date'>May 19, 2020</div>
                    <div className='name'>Full Stack Development</div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by freeCodeCamp </span>
                      <i aria-hidden='true' className='fab fa-free-code-camp' />
                    </div>
                    <a
                      href='https://www.freecodecamp.org/certification/charles_abas/full-stack'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                  <div className='history-item'>
                    <div className='date'>May 27, 2020</div>
                    <div className='name'>
                      Information Security and Quality Assurance
                    </div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by freeCodeCamp </span>
                      <i aria-hidden='true' className='fab fa-free-code-camp' />
                    </div>
                    <a
                      href='https://www.freecodecamp.org/certification/charles_abas/information-security-and-quality-assurance'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                  <div className='history-item'>
                    <div className='date'>May 22, 2020</div>
                    <div className='name'>Back End Development and APIs</div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by freeCodeCamp </span>
                      <i aria-hidden='true' className='fab fa-free-code-camp' />
                    </div>
                    <a
                      href='https://www.freecodecamp.org/certification/charles_abas/back-end-development-and-apis'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                  <div className='history-item'>
                    <div className='date'>May 19, 2020</div>
                    <div className='name'>Data Visualization</div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by freeCodeCamp </span>
                      <i aria-hidden='true' className='fab fa-free-code-camp' />
                    </div>
                    <a
                      href='https://www.freecodecamp.org/certification/charles_abas/data-visualization'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                </div>
              </div>
              <div className='history-right'>
                <div className='history-items'>
                  <div className='p-title-gap'>-</div>
                  <div className='history-item'>
                    <div className='date'>May 11, 2020</div>
                    <div className='name'>
                      JavaScript Algorithms and Data Structures
                    </div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by freeCodeCamp </span>
                      <i aria-hidden='true' className='fab fa-free-code-camp' />
                    </div>
                    <a
                      href='https://www.freecodecamp.org/certification/charles_abas/javascript-algorithms-and-data-structures'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                  <div className='history-item'>
                    <div className='date'>May 19, 2020</div>
                    <div className='name'>Front End Development Libraries</div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by freeCodeCamp </span>
                      <i aria-hidden='true' className='fab fa-free-code-camp' />
                    </div>
                    <a
                      href='https://www.freecodecamp.org/certification/charles_abas/front-end-development-libraries'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                  <div className='history-item'>
                    <div className='date'>May 11, 2018</div>
                    <div className='name'>Android Development Bundle</div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by Google </span>
                      <i aria-hidden='true' className='fab fa-google' />
                    </div>
                    <a
                      href='https://drive.google.com/file/d/10uwIQy5f3uxc2sLZlc6Cim8Os8U65H65/view?usp=sharing'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                  <div className='history-item'>
                    <div className='date'>August 22, 2018</div>
                    <div className='name'>Android Android Developer Course</div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by Google </span>
                      <i aria-hidden='true' className='fab fa-google' />
                    </div>
                    <a
                      href='https://drive.google.com/file/d/10xmErZSyLcG-V7oKaRsXRknnHXsejWxq/view?usp=sharing'
                      className='lnk'
                    >
                      view certificate
                    </a>
                  </div>
                </div>
              </div>
              <div className='clear' />
              {/* Request for More */}
              <a href='#contact-section' className='btn'>
                <span>Request for more Certificates</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className='section section-bg section-parallax section-parallax-5'
        id='works-section'
      >
        <div className='container'>
          {/* Section Heading */}
          <div className='m-titles'>
            <h2 className='m-title'>My Projects</h2>
          </div>
          <div className='row row-custom'>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'></div>
            <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
              {/* Description */}
              <div className='text'>
                <p>
                  A Collection of my favorites project I’ve designed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>
      <section className='section' id='pricing-section'>
        <div className='container'>
          {/* Section Heading */}
          <div className='m-titles'>
            <h2 className='m-title'>Pricing Plans</h2>
          </div>
          <div className='row row-custom'>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'></div>
            <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
              {/* Description */}
              <div className='text'>
                <p>
                  Are you interested to work with me ? Here are my price list
                  for design related work. Lets talk about project !
                </p>
              </div>
            </div>
          </div>
          {/* Pricing */}
          <div className='pricing-items row'>
            <div className='pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4'>
              <div className='pricing-item'>
                <div className='title'>Full Time</div>
                <div className='subtitle'>Available for Full Time</div>
                <div className='price'>$1200</div>
                <div className='text'>
                  <ul>
                    <li>Brand Design</li>
                    <li>Advertising</li>
                    <li>Web Development</li>
                    <li>Photography</li>
                  </ul>
                </div>
                <a href='#contact-section' className='btn'>
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
            <div className='pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4'>
              <div className='pricing-item'>
                <div className='title'>Project Wise</div>
                <div className='subtitle'>Available for Freelancing</div>
                <div className='price'>$400</div>
                <div className='text'>
                  <ul>
                    <li>Brand Design</li>
                    <li>Advertising</li>
                    <li>Web Development</li>
                    <li>Photography</li>
                  </ul>
                </div>
                <a href='#contact-section' className='btn'>
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
            <div className='pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4'>
              <div className='pricing-item'>
                <div className='title'>Hourley</div>
                <div className='subtitle'>Available for Hourley Basis</div>
                <div className='price'>$60</div>
                <div className='text'>
                  <ul>
                    <li>Brand Design</li> <li>Advertising</li>
                    <li>Web Development</li> <li>Photography</li>
                  </ul>
                </div>
                <a href='#contact-section' className='btn'>
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section no-padding-top section-parallax section-parallax-4'>
        <div className='container'>
          {/* Testimonials */}
          <TestimonialSlider />
        </div>
      </section>
      <section className='section section-bg' id='blog-section'>
        <div className='container'>
          {/* Section Heading */}
          <div className='m-titles'>
            <h2 className='m-title'>My Blog</h2>
          </div>
          <div className='row row-custom'>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'></div>
            <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
              {/* Description */}
              <div className='text'>
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className='blog-items'>
          <div className='archive-item'>
            <div className='image'>
              <Link href='/blog-single'>
                <a>
                  <img
                    src='assets/images/blog4.jpg'
                    alt='Usability Secrets to Create Better User Interfaces'
                  />
                </a>
              </Link>
            </div>
            <div className='desc'>
              <div className='category'>
                UI Design
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3 className='title'>
                <Link href='/blog-single'>
                  <a>Usability Secrets to Create Better User Interfaces</a>
                </Link>
              </h3>
              <div className='text'>
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{' '}
                </p>
                <div className='readmore'>
                  <Link href='/blog-single'>
                    <a className='lnk'>Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='archive-item'>
            <div className='image'>
              <Link href='/blog-single'>
                <a>
                  <img
                    src='assets/images/blog3.jpg'
                    alt='Three Ways To Level Up Your Photography'
                  />
                </a>
              </Link>
            </div>
            <div className='desc'>
              <div className='category'>
                Branding
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3 className='title'>
                <Link href='/blog-single'>
                  <a>Three Ways To Level Up Your Photography</a>
                </Link>
              </h3>
              <div className='text'>
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…{' '}
                </p>
                <div className='readmore'>
                  <Link href='/blog-single'>
                    <a className='lnk'>Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='archive-item'>
            <div className='image'>
              <Link href='/blog-single'>
                <a>
                  <img
                    src='assets/images/single7.jpg'
                    alt='10 Useful Tips to Improve Your UI Designs'
                  />
                </a>
              </Link>
            </div>
            <div className='desc'>
              <div className='category'>
                Photography
                <br />
                <span>November 28, 2021</span>
              </div>
              <h3 className='title'>
                <Link href='/blog-single'>
                  <a>10 Useful Tips to Improve Your UI Designs</a>
                </Link>
              </h3>
              <div className='text'>
                <p>
                  Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                  mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                  arcu lacus, ornare eget…
                </p>
                <div className='readmore'>
                  <Link href='/blog-single'>
                    <a className='lnk'>Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='blog-more-link'>
          <Link href='/blog'>
            <a className='btn'>
              <span>View Blog</span>
            </a>
          </Link>
        </div>
      </section>
      <section className='section section-parallax section-parallax-5'>
        <div className='container'>
          {/* Section Heading */}
          <div className='m-titles'>
            <h2 className='m-title'>My Clients</h2>
          </div>
          <div className='row row-custom'>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'></div>
            <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
              {/* Description */}
              <div className='text'>
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
          <div className='row clients-items'>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center'>
              <div className='clients-item'>
                <img src='assets/images/brand1.png' alt='' />
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center'>
              <div className='clients-item'>
                <img src='assets/images/brand2.png' alt='' />
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center'>
              <div className='clients-item'>
                <img src='assets/images/brand3.png' alt='' />
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center'>
              <div className='clients-item'>
                <img src='assets/images/brand4.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
};
export default Index;
