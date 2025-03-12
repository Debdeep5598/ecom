import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>NEXGN - Best Online Deals</title>
        <meta name="description" content="Shop amazing products at the best prices on Amazon." />
      </head>
      <body className="bg-gray-100">
        <Navbar />  {/* ✅ Navbar added globally */}
        
        {/* ⬇️ Added top padding to prevent navbar overlap */}
        <main className="min-h-screen pt-26">{children}</main> 
        
        <Footer />  {/* ✅ Footer added globally */}
      </body>
    </html>
  );
}

