import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Bạn là Trợ lý ảo Vision chuyên nghiệp của Apple Vision Pro.
Trả lời bằng tiếng Việt, lịch sự, hứng khởi, súc tích (2-3 câu).
Nhấn mạnh: điều khiển bằng mắt/tay, EyeSight, chip M2 & R1, Micro-OLED 23 triệu điểm ảnh.`;

const GROQ_API_KEY =
  "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";

const OFFLINE_REPLY = `[Chế độ Ngoại tuyến] Vision Pro sử dụng chip M2 & R1 với độ trễ 12ms, màn hình Micro-OLED 23 triệu điểm ảnh và điều khiển bằng mắt, tay tự nhiên.`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = GROQ_API_KEY;

    const messages: { role: string; content: string }[] = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    if (Array.isArray(history)) {
      history.forEach((item: { role: string; text: string }) => {
        messages.push({
          role: item.role === "user" ? "user" : "assistant",
          content: item.text,
        });
      });
    }

    messages.push({ role: "user", content: message });

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", err);
      return NextResponse.json({ text: OFFLINE_REPLY });
    }

    const data = await response.json();
    const text =
      data.choices?.[0]?.message?.content?.trim() || OFFLINE_REPLY;

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ text: OFFLINE_REPLY });
  }
}
