const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, subject, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "myassa92@gmail.com",
        pass: "asaeqndzxtayfscr",
      },
    });

    const mailOptions = {
      from: email,
      to: "spukar133@gmail.com",
      subject: subject,
      text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = { sendEmail };
