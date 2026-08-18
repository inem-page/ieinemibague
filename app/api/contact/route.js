import { Resend } from "resend";
import { NextResponse } from "next/server";

// La institución debe crear una cuenta gratuita en https://resend.com,
// verificar un dominio propio (o usar el remitente de pruebas
// "onboarding@resend.dev" mientras tanto) y agregar la variable de entorno
// RESEND_API_KEY en el panel de Vercel (Project Settings → Environment
// Variables). Ver README.md para el paso a paso completo.

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "ieinemibague@hotmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const { nombre, correo, telefono, modalidad, mensaje } = body || {};

  if (!nombre || !correo || !mensaje) {
    return NextResponse.json(
      { error: "Nombre, correo y mensaje son obligatorios." },
      { status: 400 }
    );
  }
  if (!isValidEmail(correo)) {
    return NextResponse.json(
      { error: "El correo electrónico no es válido." },
      { status: 400 }
    );
  }
  if (String(mensaje).length > 4000) {
    return NextResponse.json(
      { error: "El mensaje es demasiado largo." },
      { status: 400 }
    );
  }

  if (!resend) {
    console.error(
      "RESEND_API_KEY no está configurada. Ver README.md para activarla."
    );
    return NextResponse.json(
      {
        error:
          "El formulario aún no está configurado. Contacta al administrador del sitio.",
      },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: `Sitio web INEM <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: correo,
      subject: `Nuevo mensaje de contacto — ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Correo: ${correo}`,
        telefono ? `Teléfono: ${telefono}` : null,
        modalidad ? `Modalidad de interés: ${modalidad}` : null,
        "",
        "Mensaje:",
        mensaje,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando el correo de contacto:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo más tarde." },
      { status: 502 }
    );
  }
}
