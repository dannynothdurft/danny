import { NextResponse } from "next/server";
import contactForm from "@/utils/contactForm";

export async function POST(request) {
  try {
    const reqBody = await request.json();

    await contactForm(reqBody, `Anfrage: ${reqBody.jobtitel}`);

    return NextResponse.json({
      success: true,
      message: "E-Mail wurde erfolgreich versendet",
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
