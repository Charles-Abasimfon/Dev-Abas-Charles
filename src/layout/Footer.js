const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__builder'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left'>
              {/* social */}
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
                  href='mailto:hello@devabascharles.com'
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
                <br />
                <a
                  href='mailto:hello@devabascharles.com'
                  style={{ fontSize: '16px', marginTop: '20px' }}
                  className='lnk'
                >
                  hello@devabascharles.com
                </a>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center'>
              <div className='copyright-text'>
                <i aria-hidden='true' className='fa fa-copyright' />{' '}
                {new Date().getFullYear()} Dev. Abas Charles.
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right'>
              <div className='copyright-text'>
                Handcrafted by <strong>me</strong>, with <strong>NextJS</strong>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
