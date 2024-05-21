import type { Metadata } from "next";
import { Nav } from "../components";
import { titleFont } from "../config/fonts";
import "./globals.css";
import { Providers } from "../context/Provider";

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
    <html lang="en" className="dark">
      <body className={`${titleFont.className}`}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
