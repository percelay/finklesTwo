import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  title: "Finkles Supply Co.",
  description: "Kitchen, bath, hardware, and fireplace supply for jobs of any size."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} bg-bg text-text-main antialiased`}>
        {children}
      </body>
    </html>
  );
}
