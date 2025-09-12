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
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased min-h-screen flex flex-col`}
      >
        <header>
          <nav className="flex gap-4 justify-center">
            <Link href="/">메인</Link>
            <Link href="/posts">글 목록</Link>
          </nav>
        </header>
        <main className="flex-1 flex justify-center items-center">{children}</main>
        <footer>레이아웃 푸터</footer>
      </body>
    </html>
  );
}
