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
aimport { NextResponse } from "next/server";
        import { Resend } from "resend";

        type ContactPayload = {
            name: string;
            email: string;
            message: string;
        };

        function escapeHtml(input: string): string {
            return input
                .replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll('"', "&quot;")
                .replaceAll("'", "&#039;");
        }

        function buildEmailHtml(name: string, email: string, message: string): string {
            const safeName = escapeHtml(name);
            const safeEmail = escapeHtml(email);
            const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

            return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Novo contato do portfólio</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: Arial, sans-serif;">
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          style="background-color: #f8fafc; padding: 40px 20px;"
        >
          <tr>
            <td align="center">
              <table
                width="600"
                cellpadding="0"
                cellspacing="0"
                style="
                  background-color: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
                "
              >
                <!-- Header -->
                <tr>
                  <td
                    style="
                      background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);
                      padding: 32px 40px;
                    "
                  >
                    <h1
                      style="
                        margin: 0;
                        color: #ffffff;
                        font-size: 22px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                      "
                    >
                      📬 Novo contato do portfólio
                    </h1>
                    <p style="margin: 6px 0 0; color: #bfdbfe; font-size: 14px;">
                      Alguém entrou em contato via seu site
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding: 32px 40px;">
                    <!-- Nome -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td
                          style="
                            background-color: #f1f5f9;
                            border-radius: 8px;
                            padding: 16px 20px;
                          "
                        >
                          <p
                            style="
                              margin: 0 0 4px;
                              font-size: 11px;
                              font-weight: 700;
                              text-transform: uppercase;
                              letter-spacing: 1px;
                              color: #64748b;
                            "
                          >
                            Nome
                          </p>
                          <p
                            style="
                              margin: 0;
                              font-size: 16px;
                              font-weight: 600;
                              color: #0f172a;
                            "
                          >
                            ${safeName}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Email -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                      <tr>
                        <td
                          style="
                            background-color: #eff6ff;
                            border-radius: 8px;
                            padding: 16px 20px;
                            border-left: 4px solid #2563eb;
                          "
                        >
                          <p
                            style="
                              margin: 0 0 4px;
                              font-size: 11px;
                              font-weight: 700;
                              text-transform: uppercase;
                              letter-spacing: 1px;
                              color: #64748b;
                            "
                          >
                            Email para responder
                          </p>
                          <a
                            href="mailto:${safeEmail}"
                            style="
                              margin: 0;
                              font-size: 16px;
                              font-weight: 600;
                              color: #2563eb;
                              text-decoration: none;
                            "
                          >
                            ${safeEmail}
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Mensagem -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td
                          style="
                            background-color: #f8fafc;
                            border-radius: 8px;
                            padding: 16px 20px;
                            border: 1px solid #e2e8f0;
                          "
                        >
                          <p
                            style="
                              margin: 0 0 10px;
                              font-size: 11px;
                              font-weight: 700;
                              text-transform: uppercase;
                              letter-spacing: 1px;
                              color: #64748b;
                            "
                          >
                            Mensagem
                          </p>
                          <p
                            style="
                              margin: 0;
                              font-size: 15px;
                              color: #334155;
                              line-height: 1.7;
                            "
                          >
                            ${safeMessage}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA Responder -->
                <tr>
                  <td style="padding: 0 40px 32px;">
                    <a
                      href="mailto:${safeEmail}"
                      style="
                        display: inline-block;
                        background-color: #2563eb;
                        color: #ffffff;
                        font-size: 14px;
                        font-weight: 700;
                        text-decoration: none;
                        padding: 12px 28px;
                        border-radius: 8px;
                        letter-spacing: 0.3px;
                      "
                    >
                      ↩ Responder ${safeName}
                    </a>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td
                    style="
                      background-color: #f1f5f9;
                      padding: 20px 40px;
                      border-top: 1px solid #e2e8f0;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        font-size: 12px;
                        color: #94a3b8;
                        text-align: center;
                      "
                    >
                      Enviado via formulário do portfólio de Karlos Sodre •
                      <a
                        href="https://seu-dominio.vercel.app/portfolio"
                        style="color: #2563eb; text-decoration: none;"
                      >
                        Ver portfólio
                      </a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
        }

        export async function POST(req: Request) {
            try {
                // L�� o body
                const body = (await req.json()) as Partial<ContactPayload>;

                const name = (body.name ?? "").trim();
                const email = (body.email ?? "").trim();
                const message = (body.message ?? "").trim();

                // Validações
                if (!name || !email || !message) {
                    return NextResponse.json(
                        { ok: false, error: "Preencha todos os campos." },
                        { status: 400 }
                    );
                }

                if (name.length < 2) {
                    return NextResponse.json(
                        { ok: false, error: "Nome muito curto." },
                        { status: 400 }
                    );
                }

                if (message.length < 10) {
                    return NextResponse.json(
                        { ok: false, error: "Mensagem muito curta." },
                        { status: 400 }
                    );
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    return NextResponse.json(
                        { ok: false, error: "Email inválido." },
                        { status: 400 }
                    );
                }

                // Verifica env vars
                const RESEND_API_KEY = process.env.RESEND_API_KEY;
                const to = process.env.CONTACT_TO_EMAIL;
                const from = process.env.CONTACT_FROM_EMAIL;

                if (!RESEND_API_KEY || !to || !from) {
                    console.error("[contact] env vars ausentes:", {
                        RESEND_API_KEY: !!RESEND_API_KEY,
                        to: !!to,
                        from: !!from,
                    });
                    return NextResponse.json(
                        { ok: false, error: "Configuração de email ausente no servidor." },
                        { status: 500 }
                    );
                }

                // Envia email
                const resend = new Resend(RESEND_API_KEY);

                const { data, error } = await resend.emails.send({
                    from,
                    to,
                    replyTo: email,
                    subject: `Contato do Portfólio — ${name}`,
                    html: buildEmailHtml(name, email, message),
                });

                if (error) {
                    console.error("[contact] Resend error:", error);
                    return NextResponse.json(
                        { ok: false, error: "Erro ao enviar o email. Tente novamente." },
                        { status: 500 }
                    );
                }

                console.log("[contact] Email enviado com sucesso. ID:", data?.id);
                return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });

            } catch (err) {
                console.error("[contact] Erro inesperado:", err);
                return NextResponse.json(
                    { ok: false, error: "Erro inesperado. Tente novamente." },
                    { status: 500 }
                );
            }
        }
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