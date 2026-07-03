import type { Metadata } from "next";
import { Geist, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["vietnamese", "latin"],
  variable: "--font-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-display",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Apple Vision Pro - Kỷ nguyên điện toán không gian",
  description:
    "Trải nghiệm thế giới kỹ thuật số hòa quyện hoàn hảo vào không gian thực tế với Vision Pro.",
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
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${geistSans.variable} min-h-full flex flex-col bg-[#090909] text-[#e2e2e2] antialiased selection:bg-galaxy-blue selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
