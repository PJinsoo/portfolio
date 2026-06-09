import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JinSoo's Portfolio",
  description: "기록하고 회고하며 성장하는 개발자 박진수의 포트폴리오입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-800">
        {children}
      </body>
    </html>
  );
}
