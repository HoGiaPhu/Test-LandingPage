"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        setToast(true);
        setTimeout(() => setToast(false), 3000);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="support"
      className="mx-auto max-w-2xl px-margin-mobile py-section-gap text-center md:px-gutter"
    >
      <Mail className="mx-auto mb-4 h-10 w-10 text-primary" strokeWidth={1.5} />
      <h2 className="mb-4 font-headline-lg-mobile text-headline-lg-mobile">
        Luôn cập nhật thông tin
      </h2>
      <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
        Đăng ký để nhận tin tức mới nhất về đợt mở bán và các tính năng mới.
      </p>

      <form onSubmit={handleSubmit} className="relative mx-auto max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Địa chỉ email của bạn"
          required
          className="glass-input w-full bg-transparent px-4 py-4 pr-16 font-body-md text-on-surface placeholder-on-surface-variant/50 focus:ring-0"
        />
        <button
          type="submit"
          disabled={loading}
          aria-label="Đăng ký nhận bản tin"
          className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-4 text-primary transition-colors hover:text-white disabled:opacity-50"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </form>

      {toast && (
        <p className="mt-4 font-label-sm text-label-sm uppercase tracking-widest text-galaxy-blue">
          Đăng ký thành công!
        </p>
      )}
    </section>
  );
}
