import dynamic from 'next/dynamic';
import ContactForm from '../src/components/ContactForm';
import TestimonialSlider from '../src/components/TestimonialSlider';
import Layout from '../src/layout/Layout';

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
              <img src='assets/images/profile.png' alt='' />
              <span className='circle circle-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='749px'
                  height='375px'
                >
                  <path
                    fillRule='evenodd'
                    fill='#032074'
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
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://wa.me/qr/WZKPGKEETYXOJ1'
                  >
                    <img
                      src='https://img.icons8.com/fluency/512/whatsapp.png'
                      style={{
                        width: '40px',
                        marginTop: '-7px',
                        marginLeft: '-5px',
                      }}
                      alt='Abasimfon Charles | WhatsApp Chat'
                    />
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='mailto:devabascharles@gmail.com'
                  >
                    <img
                      src='https://img.icons8.com/fluency/512/gmail.png'
                      style={{
                        width: '40px',
                        marginTop: '-7px',
                        marginLeft: '-5px',
                      }}
                      alt='Abasimfon Charles | Send me an Email'
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
                    <i aria-hidden='true' className='fa fa-award' />
                  </div>
                  <div className='num'>32+</div>
                  <div className='title'>Certificates</div>
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
                    website/application.
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
                    <div className='date'>2021</div>
                    <div className='name'>
                      Upwork Top Rated Developer Status
                    </div>
                    <div
                      className='subname'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span>Issued by Upwork </span>
                      <img
                        src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png'
                        style={{ width: '20px' }}
                        alt='Abasimfon Charles | Upwork Profile'
                      />
                    </div>
                    <a
                      href='https://www.upwork.com/freelancers/charlesabas'
                      className='lnk'
                      target='_blank'
                    >
                      view certificate
                    </a>
                  </div>
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
                      target='_blank'
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
                      target='_blank'
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
                      target='_blank'
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
                      target='_blank'
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
                      target='_blank'
                    >
                      view certificate
                    </a>
                  </div>
                </div>
              </div>
              <div className='history-right'>
                <div className='history-items'>
                  <div className='p-title-gap'>-</div>
                  <div className='history-item' style={{ marginTop: '0px' }}>
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
                      target='_blank'
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
                      target='_blank'
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
                      target='_blank'
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
                      target='_blank'
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
            <h2 className='m-title'>Recent Projects</h2>
          </div>
          <div className='row row-custom'>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'></div>
            <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
              {/* Description */}
              <div className='text'>
                <p>
                  Few of my recent projects (excluding projects where I signed a
                  Non-Disclosure Agreement - NDA).
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
          <div className='row row-custom' style={{ marginTop: '60px' }}>
            <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'></div>
            <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
              <div className='text'>
                <p>
                  I'd need to implement a really long infinite scroll if I were
                  to display all my past projects here, lol :).
                  <br />
                  For now, Wanna see more?
                </p>
                {/* Request for More */}
                <a href='#contact-section' className='btn'>
                  <span>Request for more Past Projects</span>
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
      <ContactForm />
    </Layout>
  );
};
export default Index;
