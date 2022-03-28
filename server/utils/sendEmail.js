import nodemailer from "nodemailer";
const sendgridTransport = require("nodemailer-sendgrid-transport");

//Load env vars
require("dotenv").config({ path: "../config/config.env" });

export const sendEmail = async (options) => {
  try {
    const transport = nodemailer.createTransport(
      sendgridTransport({
        auth: {
          api_key: process.env.API_KEY,
        },
      })
    );

    const email = {
      from: process.env.AUTH_EMAIL,
      to: options.email,
      subject: options.subject,
      html: options.message,
    };

    transport.sendMail(email, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(info);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
