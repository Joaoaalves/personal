import ResendAdapter, { EmailPayload } from "@/adapters/Resend";
import { NextResponse } from "next/server";

const withResendKey =
    (
        handler: (
            request: Request,
            resendAdapter: ResendAdapter,
        ) => Promise<Response>,
    ) =>
    async (request: Request): Promise<Response> => {
        const resend_api_key = process.env.RESEND_KEY;

        if (!resend_api_key) {
            return NextResponse.json(
                { error: "RESEND_KEY is not set" },
                { status: 500 },
            );
        }

        const resendAdapter = new ResendAdapter(resend_api_key);
        return handler(request, resendAdapter);
    };

export const POST = withResendKey(async (request, resendAdapter) => {
    try {
        const { name, email, message }: EmailPayload = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        await resendAdapter.sendEmail({ name, email, message });

        return NextResponse.json({ status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
});
