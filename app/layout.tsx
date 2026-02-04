import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FreshWash Laundry",
  description: "Layanan laundry modern dengan harga transparan.",
  openGraph: {
    title: "FreshWash Laundry",
    description: "Self-service & laundry kiloan di Bandung. Harga jelas, tanpa kejutan.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreshWash Laundry",
    description: "Self-service & laundry kiloan di Bandung. Harga jelas, tanpa kejutan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${hankenGrotesk.variable} ${fraunces.variable}`}
    >
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
