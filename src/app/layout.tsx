import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gerald Recaña | Full Stack Developer",
  description:
    "Personal portfolio of Gerald Recaña — Full Stack Developer and IT Support Specialist.",
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