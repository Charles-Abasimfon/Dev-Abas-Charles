const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left">
              {/* social */}
              <div
                className="social-links"
              >
                <a target="_blank" rel="noreferrer" href="http://twitter.com">
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a target="_blank" rel="noreferrer" href="http://dribble.com">
                  <i aria-hidden="true" className="fab fa-dribbble" />
                </a>
                <a target="_blank" rel="noreferrer" href="http://behance.com">
                  <i aria-hidden="true" className="fab fa-behance" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
              <div
                className="copyright-text"
              >
                © 2022 Ober. All Rights Reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
              <div
                className="copyright-text"
              >
                Developed by <strong>beshleyua</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
