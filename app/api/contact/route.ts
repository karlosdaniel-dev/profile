import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
    name: string;
    email: string;
    message: string;
};

function escapeHtml(input: string) {
    return input
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Partial<Payload>;
        const name = (body.name || "").trim();
        const email = (body.email || "").trim();
        const message = (body.message || "").trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Preencha nome, email e mensagem." },
                { status: 400 }
            );
        }

        // validação básica de email
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
            return NextResponse.json(
                { ok: false, error: "Email inválido." },
                { status: 400 }
            );
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.CONTACT_FROM_EMAIL;

        if (!RESEND_API_KEY || !to || !from) {
            return NextResponse.json(
                { ok: false, error: "Configuração de email ausente no servidor." },
                { status: 500 }
            );
        }

        const resend = new Resend(RESEND_API_KEY);

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

        const subject = `Contato do Portfólio — ${name}`;

        const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5">
        <h2>Novo contato do seu portfólio</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensagem:</strong><br/>${safeMessage}</p>
        <hr/>
        <p style="font-size: 12px; color: #666">
          Enviado via formulário do portfólio.
        </p>
      </div>
    `;

        const { data, error } = await resend.emails.send({
            from,
            to,
            replyTo: email, // para você responder direto a pessoa
            subject,
            html,
        });

        if (error) {
            return NextResponse.json(
                { ok: false, error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { ok: false, error: "Erro inesperado ao enviar mensagem." },
            { status: 500 }
        );
    }
}