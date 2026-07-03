"use client";

import { useState } from "react";
import { Bot, Send, X } from "lucide-react";

type Message = { role: "user" | "assistant"; text: string };

export default function VisionAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Chào bạn! Tôi có thể giúp gì về Apple Vision Pro?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const history = [...messages, { role: "user" as const, text }];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            text: m.text,
          })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.text || "Xin lỗi, tôi không thể trả lời lúc này.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "[Ngoại tuyến] Vision Pro — chip M2 & R1, màn hình Micro-OLED siêu sắc nét.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-[150] flex flex-col items-end sm:right-8 sm:bottom-8">
      {isOpen && (
        <div className="glass-panel mb-4 flex h-96 w-80 flex-col overflow-hidden rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-surface-container/80 p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-galaxy-blue" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                Trợ lý Vision
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Đóng chat"
              className="text-on-surface-variant hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "user"
                    ? "max-w-[85%] self-end rounded-lg rounded-tr-none border border-galaxy-blue/30 bg-galaxy-blue/20 p-3"
                    : "max-w-[85%] self-start rounded-lg rounded-tl-none border border-white/5 bg-surface-container-high/50 p-3"
                }
              >
                <p className="text-sm text-on-surface">{msg.text}</p>
              </div>
            ))}
            {loading && (
              <p className="text-sm text-on-surface-variant">Đang trả lời...</p>
            )}
          </div>
          <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hỏi về Vision Pro..."
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-on-surface focus:border-galaxy-blue focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-galaxy-blue text-white disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        type="button"
        data-track="chatbot_open"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Mở trợ lý Vision"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-surface-container-high shadow-2xl hover:bg-surface-container-highest"
      >
        <Bot className="h-6 w-6 text-primary" />
      </button>
    </div>
  );
}
