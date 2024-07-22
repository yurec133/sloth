import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sloth-o-nomics",
  description: "Where Slow and Steady Wins the Reward Race!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
