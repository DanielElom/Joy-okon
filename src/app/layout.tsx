import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joy Okon - Personal Portfolio",
  description: "Personal Portfolio of Joy Okon - UI/UX Designer & Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased font-sans bg-black text-white overflow-hidden`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
