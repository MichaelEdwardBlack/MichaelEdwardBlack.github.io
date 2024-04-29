import type { Metadata } from "next";
import "./globals.css";
import { Root } from "./Root";

export const metadata: Metadata = {
  title: "Michael Edward Black",
  description: "A next js app built to show some cool things I've done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Root>{children}</Root>
    </html>
  );
}
