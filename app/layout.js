import { Geist, Geist_Mono } from "next/font/google";
import { Satisfy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Amit Gupta",
  description: "Portfolio Website",
  icons: {
    icon: "/amit.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
