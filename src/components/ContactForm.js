import { useState } from "react";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    messages: "",
  });
  const [error, setError] = useState(false);
  const { name, email, messages } = contactData;

  const onChange = (e) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || messages.length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setError(false);
      setTimeout(() => {
        setContactData({ name: "", email: "", messages: "" });
      }, 2000);
    }
  };

  return (
    <section
      className="section section-bg section-parallax section-parallax-2"
      id="contact-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2
            className="m-title"
          >
            Contact Me
          </h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
            {/* Section numbers */}
            <div className="numbers-items contacts-items">
              <div
                className="numbers-item"
              >
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-phone" />
                </div>
                <div className="num">+1 023-456-7800</div>
              </div>
              <div
                className="numbers-item"
              >
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-at" />
                </div>
                <div className="num">hi@ober.com</div>
              </div>
              <div
                className="numbers-item"
              >
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-location-arrow" />
                </div>
                <div className="num">43rd Street River Point NY 1023</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* contact form */}
            <div
              className="contacts-form"
            >
              <form id="cform" onSubmit={(e) => onSubmit(e)}>
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                  {error && !name && (
                    <label id="name-error" className="error" htmlFor="name">
                      This field is required.
                    </label>
                  )}
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your email address"
                  />
                  {error && !email && (
                    <label id="email-error" className="error" htmlFor="email">
                      This field is required.
                    </label>
                  )}
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    value={messages}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your message here"
                  />
                  {error && !messages && (
                    <label
                      id="message-error"
                      className="error"
                      htmlFor="message"
                    >
                      This field is required.
                    </label>
                  )}
                </label>
                <a href="#" className="btn" onClick={(e) => onSubmit(e)}>
                  Submit
                </a>
              </form>
            </div>
            <div className="alert-success" style={{ display: "none" }}>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
