import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antoine Wodniack - Creative Developer",
  description: "Creative developer crafting memorable user experiences with animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
