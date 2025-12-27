import type { Metadata } from "next";
import "./globals.css";
import { ToasterContext } from "./context/ToasterContext";


export const metadata: Metadata = {
  title: "Messanger Clone",
  description: "Messanger Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToasterContext/>
        {children}
      </body>
    </html>
  );
}
