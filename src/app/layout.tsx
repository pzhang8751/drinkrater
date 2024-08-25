import type { Metadata } from "next";
import {noto} from '@/app/ui/fonts'
import "./globals.css";
import BrowseNav from "./ui/browsenav";

export const metadata: Metadata = {
  title: "Welcome to Drinkrater",
  description: "Find and rate your next favorite drink"
};

import ReviewWindow from "@/app/ui/reviewwindow";

let isOpen = true;

export function openReview() {
  isOpen = true;
}

export function closeReview() {
  isOpen = false; 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.className}`}>
        {/* <ReviewWindow params={{
          open: isOpen
        }} /> */}
        <BrowseNav/>
        {children}


      </body>
    </html>
  );
  
}
