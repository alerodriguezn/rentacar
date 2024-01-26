import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/config/fonts";
import { TopMenu } from "@/components";

export const metadata: Metadata = {
  title: "Rent a Car",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col items-center`}>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
