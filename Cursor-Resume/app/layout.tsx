import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurinder Singh - Staff iOS & AI/ML Engineer",
  description:
    "Staff iOS & AI/ML Engineer with over a decade of experience scaling applications for millions of users. Patent holder and technical leader specializing in bridging cutting-edge AI/ML with practical mobile solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

