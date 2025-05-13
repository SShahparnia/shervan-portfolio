import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PageTransitionWrapper from "@/components/PageTransitionWrapper"; // Import the wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shervan Shahparnia - Portfolio",
  description: "Portfolio of Shervan Shahparnia, CS & Data Science Graduate, Aspiring AI Master's Student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-300 flex`}>
        <Sidebar />
        <main className="flex-grow p-6 md:p-10 ml-64 overflow-x-hidden"> {/* Add ml-64 and overflow-x-hidden */}
          <PageTransitionWrapper>{children}</PageTransitionWrapper> {/* Wrap children */} 
        </main>
      </body>
    </html>
  );
}
