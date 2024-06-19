import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Traveler ",
  description: "Travel UI/UX App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" container px-8">
        <NavBar />
        <main className="relative overflow-hidden">
           {children}
        </main>
       
        <Footer />
        </body>
    </html>
  );
}
