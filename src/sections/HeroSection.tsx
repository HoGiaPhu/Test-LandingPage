"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDaLkQWROzfp7FOtURM30hJp5tECnB5fmqqkavYLk17zgoGjzYFEsUP9WB9TIvX2vq6M7zz-WWGVBmplxVgcVmxJiTl-eCeotV8Q3IxGSiVh7W_7LyRVW_s3sSJ4vvWOoSDz6FbuhNsfoEAgNaDW4iDDwQ5h-dV7HVV-lQBZCEJoZigcN63xWKMj6sbbzijw0IsggQzpD1nf_r4twr_Q6Am7_joG0M7eQxtEgcBrzL3q5CJmd38RzepfkS8gwHp23XCvm2_P0_Vkto=w1920";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section
      id="products"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-margin-mobile pt-32 pb-20 md:px-gutter"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full bg-galaxy-blue-dim opacity-30 blur-[120px]" />
      </div>

      <div className="z-10 mx-auto flex max-w-4xl flex-col items-center space-y-stack-md text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <div className="pulse-dot" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
            Kỷ nguyên điện toán không gian
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-display-2xl-mobile text-display-2xl-mobile text-gradient md:font-display-2xl md:text-display-2xl"
        >
          Chào mừng bạn đến với thực tại mới
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant"
        >
          Nơi thế giới kỹ thuật số hòa quyện hoàn hảo vào không gian thực tế của
          bạn. Trải nghiệm sự vô hạn của tầm nhìn.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="flex flex-col gap-4 pt-8 sm:flex-row"
        >
          <Link
            href="#preorder"
            className="btn-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest"
          >
            Đặt trước ngay
          </Link>
          <Link
            href="#features"
            className="btn-secondary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface"
          >
            Khám phá
          </Link>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
        className="z-10 mx-auto mt-stack-lg w-full max-w-container-max"
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.005 }}
          transition={{ duration: 0.4, ease }}
          className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-surface-container-low shadow-[0_24px_64px_-16px_rgba(10,132,255,0.12)] md:rounded-3xl"
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/5 bg-gradient-to-t from-surface-dim/90 to-transparent" />
          <Image
            src={HERO_IMAGE}
            alt="Vision Pro Headset"
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
