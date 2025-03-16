import { Resend } from "resend";

export interface EmailPayload {
    name: string;
    email: string;
    message: string;
}

export default class ResendAdapter {
    private resend: Resend;

    constructor(apiKey: string) {
        this.resend = new Resend(apiKey);
    }

    async sendEmail({ name, email, message }: EmailPayload): Promise<void> {
        await this.resend.emails.send({
            from: "Mensagem do Site<site@joao-alves.com>",
            to: "contato@joao-alves.com",
            subject: "Nova mensagem do site",
            html: `
                Nome: ${name} <br></br>
                Email: ${email} <br></br><br></br>
                Mensagem: <p>${message}</p>
            `,
        });
    }
}
