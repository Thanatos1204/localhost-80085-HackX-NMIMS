import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FinanceContextProvider from "../app/context/finance-context";

import "./globals.css";

const alice = Roboto({ 
  weight: '400', 
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <FinanceContextProvider>
        <ToastContainer />
          <body className={alice.className}>{children}</body>
        </FinanceContextProvider>
      </AuthContextProvider>
      
    </html>
  );
}
