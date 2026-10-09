import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL, LINKS } from "@/lib/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Akshay Joshy | Software Developer",
  description:
    "Portfolio of Akshay Joshy, a Software Developer specializing in React, TypeScript, Java, Spring Boot, REST APIs, MySQL, and MongoDB.",
  keywords: [
    "Akshay Joshy",
    "Software Developer",
    "React Developer",
    "Java Developer",
    "Full Stack Developer",
    "React TypeScript",
    "Java Spring Boot",
    "Spring Boot Developer",
    "Frontend Developer",
    "Kerala Software Developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Akshay Joshy | Software Developer",
    description:
      "Software Developer building modern web and mobile applications with React, TypeScript, Java, and Spring Boot.",
    images: ["/og/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Joshy | Software Developer",
    images: ["/og/og-image.png"],
  },
};
const ld = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akshay Joshy",
  jobTitle: "Software Developer",
  url: SITE_URL,
  email: "akshayjoshy1611@gmail.com",
  sameAs: [LINKS.linkedin, LINKS.github],
};
const themeScript = `try{if(localStorage.theme==='light')document.documentElement.classList.remove('dark')}catch(e){}`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
