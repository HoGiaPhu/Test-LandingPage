import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDaLkQWROzfp7FOtURM30hJp5tECnB5fmqqkavYLk17zgoGjzYFEsUP9WB9TIvX2vq6M7zz-WWGVBmplxVgcVmxJiTl-eCeotV8Q3IxGSiVh7W_7LyRVW_s3sSJ4vvWOoSDz6FbuhNsfoEAgNaDW4iDDwQ5h-dV7HVV-lQBZCEJoZigcN63xWKMj6sbbzijw0IsggQzpD1nf_r4twr_Q6Am7_joG0M7eQxtEgcBrzL3q5CJmd38RzepfkS8gwHp23XCvm2_P0_Vkto";

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
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <div className="pulse-dot" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
            Kỷ nguyên điện toán không gian
          </span>
        </div>

        <h1 className="font-display-2xl-mobile text-display-2xl-mobile text-gradient md:font-display-2xl md:text-display-2xl">
          Chào mừng bạn đến với thực tại mới
        </h1>

        <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
          Nơi thế giới kỹ thuật số hòa quyện hoàn hảo vào không gian thực tế của
          bạn. Trải nghiệm sự vô hạn của tầm nhìn.
        </p>

        <div className="flex flex-col gap-4 pt-8 sm:flex-row">
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
        </div>
      </div>

      <div className="z-10 mx-auto mt-stack-lg w-full max-w-container-max">
        <div className="glass-panel group relative aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-dim to-transparent" />
          <Image
            src={HERO_IMAGE}
            alt="Vision Pro Headset"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover opacity-80 transition-opacity duration-700 group-hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
