import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState(false);
  const { name, email, message } = contactData;
  const [sending, setSending] = useState(false);

  const onChange = (e) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
    } else {
      setError(false);
      setSending(true);
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

      const { error } = response;

      if (error) {
        setSending(false);
        toast('Something went wrong, please try again', {
          type: 'error',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        console.log(error);
        return;
      } else {
        setSending(false);
        toast('Message sent successfully!, I will be in touch shortly', {
          type: 'success',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setContactData({
          name: '',
          email: '',
          message: '',
        });
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
                      Please enter your full name.
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
                      Please enter your email address.
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
                      Please enter your message.
                    </label>
                  )}
                </label>
                <a
                  href='#'
                  className='btn'
                  aria-disabled={sending}
                  style={{ pointerEvents: sending ? 'none' : 'auto' }}
                  onClick={(e) => onSubmit(e)}
                >
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
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
