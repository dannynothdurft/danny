import { NextResponse } from "next/server";
import { contactFormME, contactFormUSER } from "@/utils/mails/contactForm";

export async function POST(request) {
  try {
    const reqBody = await request.json();

    await contactFormME(
      reqBody,
      `${reqBody.name} hat dir ein Angebot gesendet`
    );

    await contactFormUSER(reqBody, `Du hast ein Angebot versendet`);

    return NextResponse.json({
      success: true,
      message: "E-Mail wurde erfolgreich versendet",
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
