import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["vietnamese", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vision-pro-landing.netlify.app"),
  title: "Apple Vision Pro - Kỷ nguyên điện toán không gian",
  description:
    "Trải nghiệm thế giới kỹ thuật số hòa quyện hoàn hảo vào không gian thực tế với Vision Pro.",
  openGraph: {
    title: "Apple Vision Pro - Kỷ nguyên điện toán không gian",
    description:
      "Trải nghiệm thế giới kỹ thuật số hòa quyện hoàn hảo vào không gian thực tế với Vision Pro.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/hero-vision-pro.png",
        width: 1200,
        height: 675,
        alt: "Apple Vision Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple Vision Pro - Kỷ nguyên điện toán không gian",
    description:
      "Trải nghiệm thế giới kỹ thuật số hòa quyện hoàn hảo vào không gian thực tế với Vision Pro.",
    images: ["/hero-vision-pro.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark scroll-smooth h-full">
      <head>
        <link
          rel="preload"
          href="/hero-vision-pro.png"
          as="image"
          type="image/png"
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} min-h-full flex flex-col bg-[#090909] text-[#e2e2e2] antialiased selection:bg-galaxy-blue selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
