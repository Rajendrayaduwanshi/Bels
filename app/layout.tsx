import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Endoscopy | Laser Surgery | Gyne Doctor | Best IVF Centre in Bhopal",
  description:
    "BELS Hospital offers specialized care in IVF, endoscopy, laser surgery, diagnostic services and gynecology. Recognized as the Best IVF Centre in Bhopal, Best Endoscopy Hospital in Bhopal, Best Laser Surgery in Bhopal, and Best Gyne Doctor in Bhopal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <meta name="keywords" content="Best Endoscopy Hospital in Bhopal, Best IVF Centre in Bhopal, Best Laser Surgery in Bhopal, Best Gyne Doctor in Bhopal" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="mt-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
