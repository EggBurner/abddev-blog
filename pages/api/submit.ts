import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'

const EMAIL = process.env.EMAIL;
const PASS = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASS
    }
  })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Access form data from req.body
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
        try {
            const info = await transporter.sendMail({
              from: `"Abdullah Islam 🎯" <${EMAIL}>`,
              to: EMAIL,
              subject: `Message from ${name}`,
              text: `Email: ${email}\nMessage: ${message}`
            })
            console.log("Message sent: %s", info.messageId);
            res.status(200).json({ message: 'Message sent' });         
        } catch (error) {
            console.log("Error while sending email", error)
            res.status(500).json({ message: 'Error while sending email' });
        }

} else {
    // Handle other HTTP methods (optional)
    res.status(405).json({ message: 'Method not allowed' });
  }
}






  

//   formData.set(name, '');
//   formData.set(email, '');
//   formData.set(message, '');
//   console.log("Message sent: %s", info.messageId);
  
// } catch (error) {
//   console.log("Error while sending email", error)
// }