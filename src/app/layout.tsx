import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/components/Providers";
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
  metadataBase: new URL("https://jocular-mandazi-56fe4f.netlify.app"),
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
    <html lang="vi" className="dark scroll-smooth h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} min-h-full flex flex-col bg-background text-on-background antialiased selection:bg-galaxy-blue selection:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
