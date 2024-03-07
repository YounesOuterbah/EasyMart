import { sendEmail } from "../utils/sendEmail.js";

export const sendEmailToUser = async (req, res) => {
  const { userEmail, subject, htmlTemplate } = req.body;
  try {
    await sendEmail(userEmail, subject, htmlTemplate);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error (NODEMAILER)" });
  }
};
