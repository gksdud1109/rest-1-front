import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "사이트사이트",
  description: "Rest api 연습",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-red-300 border-2`}
      >
        <header>
          <nav className="flex gap-4 justify-center">
            <Link className="text-blue-500 ml-4 border-2 border-blue-500" href="/">메인</Link>
            <Link className="text-blue-500 border-2 border-blue-500" href="/posts">글 목록</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>레이아웃 푸터</footer>
      </body>
    </html>
  );
}
