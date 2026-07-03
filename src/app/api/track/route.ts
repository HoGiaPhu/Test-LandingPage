import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, detail, path } = body;

    if (!event || typeof event !== "string") {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }

    const payload = {
      type: "analytics_event",
      event,
      detail: detail ?? null,
      path: path ?? "/",
      timestamp: new Date().toISOString(),
      source: "vision-pro-landing",
    };

    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => console.error("Track webhook error:", err));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
