import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "../styles/globals.css";
import React from "react";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Test App",
  description: "Next.js app for tech test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} antialiased`}
      >
        <React.StrictMode>
        {children}
        </React.StrictMode>
      </body>
    </html>
  );
}
