import { NextResponse } from "next/server";
import { EmailTemplate } from "@/template/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.MONGAR_EMAIL);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const { data: responseData, error } = await resend.emails.send({
      from: "Mongar <onboarding@resend.dev>",
      to: ["mongar.developer@gmail.com"],
      subject: `Mensaje de: ${name}`,
      react: EmailTemplate({ name, email, message }),
      text: "",
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return NextResponse.json(responseData);
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
