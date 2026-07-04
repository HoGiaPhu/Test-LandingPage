import Image from "next/image";
import Link from "next/link";
import BuyNowButton from "@/components/BuyNowButton";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDaLkQWROzfp7FOtURM30hJp5tECnB5fmqqkavYLk17zgoGjzYFEsUP9WB9TIvX2vq6M7zz-WWGVBmplxVgcVmxJiTl-eCeotV8Q3IxGSiVh7W_7LyRVW_s3sSJ4vvWOoSDz6FbuhNsfoEAgNaDW4iDDwQ5h-dV7HVV-lQBZCEJoZigcN63xWKMj6sbbzijw0IsggQzpD1nf_r4twr_Q6Am7_joG0M7eQxtEgcBrzL3q5CJmd38RzepfkS8gwHp23XCvm2_P0_Vkto=w1920";

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
        <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <div className="pulse-dot" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
            Kỷ nguyên điện toán không gian
          </span>
        </div>

        <h1 className="animate-fade-in-up delay-100 font-display-2xl-mobile text-display-2xl-mobile text-gradient md:font-display-2xl md:text-display-2xl">
          Chào mừng bạn đến với thực tại mới
        </h1>

        <p className="animate-fade-in-up delay-200 mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
          Nơi thế giới kỹ thuật số hòa quyện hoàn hảo vào không gian thực tế của
          bạn. Trải nghiệm sự vô hạn của tầm nhìn.
        </p>

        <div className="animate-fade-in-up delay-300 flex flex-col gap-4 pt-8 sm:flex-row">
          <BuyNowButton />
          <Link
            href="#features"
            data-track="hero_explore"
            className="btn-secondary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface"
          >
            Khám phá
          </Link>
        </div>
      </div>

      <div className="animate-fade-in-up delay-400 z-10 mx-auto mt-stack-lg w-full max-w-container-max">
        <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_64px_-16px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:-translate-y-1 dark:border-white/10 dark:bg-surface-container-low dark:shadow-[0_24px_64px_-16px_rgba(10,132,255,0.12)] md:rounded-3xl">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-2/5 bg-gradient-to-t from-surface-dim/90 to-transparent dark:block" />
          <Image
            src={HERO_IMAGE}
            alt="Vision Pro Headset"
            fill
            priority
            fetchPriority="high"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
