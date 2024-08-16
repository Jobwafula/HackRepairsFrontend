import type { Metadata } from "next";
import { Roboto } from "next/font/google"; 
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/context/authContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { inter } from "@/ui/font";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default:'Hack Repairs',
    template:'$s -Hack Repairs'
  },
  description: "An ecommerce platform offering best phone screen sales and repair services",
  twitter:{
    card:'summary_large_image'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <body className={`${inter.className} antialiased`}>
      <AuthProvider>
        
        <div>
          {children}
        </div>
       

      </AuthProvider>

      </body>
    </html>
  );
}
