import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = await req.body;
    try {
      const data = await resend.emails.send({
        from: "contato@joaoalves.me",
        to: ["joaoaa2105@gmail.com"],
        subject: "Contato pelo site",
        text: `Nome: ${name}\nEmail: ${email}\n\nMensagem: ${message}`,
      });
  
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  res.status(405).json({ error: "Method not allowed" });
}