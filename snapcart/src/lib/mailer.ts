import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendMail = async (
  to: string,
  subject: string,
  html: string
) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `Snapcart <satyam@snapcart.dev>`, // verified sender in Resend
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Resend Error:", error);
      throw new Error("Email failed to send");
    }

    return data;
  } catch (err) {
    console.error("SendMail Error:", err);
    throw err;
  }
};
