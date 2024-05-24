import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import React from "react";
import { Header } from "../components";
import { Footer } from "../components/Footer/Footer";
import { Toaster } from "sonner";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "900", "700"],
});

export const metadata: Metadata = {
  title: "Mongar",
  description: "Creamos la página web que necesitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} bg-darkBlue-950 text-white relative w-full`}
      >
        <Toaster position="bottom-right" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
