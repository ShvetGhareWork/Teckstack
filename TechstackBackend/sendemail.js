const nodemailer = require("nodemailer");

const sendEmail = async (teamName, teamLeader, members) => {
  let transporter = nodemailer.createTransport({
    service: "gmail", // Use your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    subject: `You are added to the team ${teamName}`,
    text: `Hello,

You have been successfully added to the team ${teamName} led by ${teamLeader}. We are excited to have you on board.

Best regards,
Team ${teamLeader}`,
  };

  try {
    for (const member of members) {
      mailOptions.to = member.email;
      await transporter.sendMail(mailOptions);
    }
    console.log("Emails sent successfully.");
  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

module.exports = sendEmail;
