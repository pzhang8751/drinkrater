import type { Metadata } from "next";
import {noto} from '@/app/ui/fonts'
import "./globals.css";
import BrowseNav from "./ui/browsenav";

export const metadata: Metadata = {
  title: "Welcome to Drinkrater",
  description: "Find and rate your next favorite drink"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.className}`}>
        <BrowseNav/>
        {children}
      </body>
    </html>
  );
  
}
