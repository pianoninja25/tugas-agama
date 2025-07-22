import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";



const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leonard Sianipar",
  description: "Tugas Agama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
