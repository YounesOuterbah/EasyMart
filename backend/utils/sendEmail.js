import nodemailer from "nodemailer";

export async function sendEmail(userEmail, subject, htmlTemplate) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: subject,
    html: htmlTemplate,
  });
}
