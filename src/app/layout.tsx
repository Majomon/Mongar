import type { Metadata } from "next";
import { NavbarMenu } from "../components";
import { titleFont } from "../config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mongar",
  description: "Desarrollamos tu página ideal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titleFont.className}`}>
        <NavbarMenu />
        {children}
      </body>
    </html>
  );
}
