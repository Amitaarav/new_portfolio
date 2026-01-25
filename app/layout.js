import { Geist, Geist_Mono } from "next/font/google";
import { Satisfy } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { PageLoader } from "./components/loader/PageLoader";

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
  title: "Amit Kumar Gupta | Full-Stack Developer",
  description: "Full-Stack Developer specializing in MERN stack, Next.js, Web3, blockchain (Solana), DevOps, and cloud infrastructure. Building scalable web applications with expertise in TypeScript, PostgreSQL, Redis, and Kafka.",
  keywords: ["Full-Stack Developer", "MERN Stack", "Next.js", "Web3", "Solana", "DevOps", "React", "Node.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Amit Kumar Gupta" }],
  creator: "Amit Kumar Gupta",
  icons: {
    icon: "/amit.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amitgupta.dev",
    title: "Amit Kumar Gupta | Full-Stack Developer",
    description: "Full-Stack Developer specializing in MERN stack, Next.js, Web3, blockchain, and DevOps. View my projects and get in touch!",
    siteName: "Amit Kumar Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar Gupta | Full-Stack Developer",
    description: "Full-Stack Developer specializing in MERN stack, Next.js, Web3, blockchain, and DevOps.",
    creator: "@amitgupta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} antialiased`}
      >
        <ThemeProvider>
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
