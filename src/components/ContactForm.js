import { useState } from 'react';

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState(false);
  const { name, email, message } = contactData;

  const onChange = (e) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
    } else {
      setError(false);
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const response = await res.json();

      console.log(response);

      const { error } = response;
      if (error) {
        console.log(error);
        return;
      }
    }
  };

  return (
    <section
      className='section section-bg section-parallax section-parallax-2'
      id='contact-section'
    >
      <div className='container'>
        {/* Section Heading */}
        <div className='m-titles'>
          <h2 className='m-title'>Contact Me</h2>
        </div>
        <div className='row row-custom'>
          <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right'>
            {/* Section numbers */}
          </div>
          <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line'>
            {/* contact form */}
            <div className='contacts-form'>
              <form id='cform' onSubmit={(e) => onSubmit(e)}>
                <label>
                  Name
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter your full name'
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                  {error && !name && (
                    <label id='name-error' className='error' htmlFor='name'>
                      This field is required.
                    </label>
                  )}
                </label>
                <label>
                  Email Address
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    placeholder='Enter your email address'
                  />
                  {error && !email && (
                    <label id='email-error' className='error' htmlFor='email'>
                      This field is required.
                    </label>
                  )}
                </label>
                <label>
                  Message
                  <textarea
                    name='message'
                    value={message}
                    onChange={(e) => onChange(e)}
                    placeholder='Enter your message here'
                  />
                  {error && !message && (
                    <label
                      id='message-error'
                      className='error'
                      htmlFor='message'
                    >
                      This field is required.
                    </label>
                  )}
                </label>
                <a href='#' className='btn' onClick={(e) => onSubmit(e)}>
                  <span>Submit</span>
                </a>
              </form>
            </div>
            <div className='alert-success' style={{ display: 'none' }}>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
