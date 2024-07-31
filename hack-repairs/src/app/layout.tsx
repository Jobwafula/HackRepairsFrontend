import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Import Roboto font
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/context/authContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add desired font weights
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hack Repairs",
  description: "An ecommerce platform offering best phone screen sales and repair services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
      <AuthProvider>
        <div>
          <Navbar/>
        </div>
        <div>
          {children}
        </div>
        <Footer />

      </AuthProvider>

      </body>
    </html>
  );
}
