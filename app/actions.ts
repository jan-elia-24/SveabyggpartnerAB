"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContact(formData: FormData) {
  const name = escapeHtml((formData.get("name") as string).slice(0, 200));
  const phone = escapeHtml((formData.get("phone") as string).slice(0, 50));
  const email = escapeHtml((formData.get("email") as string).slice(0, 200));
  const message = escapeHtml((formData.get("message") as string).slice(0, 5000));

  await resend.emails.send({
    from: "Svea Bygg Partner <onboarding@resend.dev>",
    to: "sveabyggpartner@gmail.com",
    subject: `Ny förfrågan från ${name}`,
    html: `
      <p><strong>Namn:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>E-post:</strong> ${email}</p>
      <p><strong>Meddelande:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });
}
