import nodemailer from 'nodemailer';

function sendEmail(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject: `[Hello, New Contact Form Lead] : Dev Abas Charles`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Abasimfon Charles | FullStack Website & App Developer, Designer.</title>
        <meta name="description" content="I am an Expert Full-Stack Website & Mobile App Developer and Designer with many years of experience in designing and developing outstanding production-ready websites, applications and other software for different industries, brands and businesses.">
        <meta name="author" content="Abasimfon Charles">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://www.devabascharles.com/assets/images/logoblack.png" class="logo-image" style="width: 200px">
              </div>
      </body>
      </html>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.json({ error: true });
    }
    console.log(info);
    return res.json({ done: true });
  });
}

export default sendEmail;
