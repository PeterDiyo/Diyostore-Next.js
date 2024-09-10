import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiyoStore",
  description: "A store App built with create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50 bg-white">
          <Navbar />
        </div>
        <div className="bg-slate-100 min-h-screen">
          <Container className="py-7">{children}</Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
