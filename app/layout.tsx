import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timeless Comfort & Endless Luxury",
  description: "Experience the pinnacle of luxury interior design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
