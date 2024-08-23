import type { Metadata } from "next";
import {noto} from '@/app/ui/fonts'
import "./globals.css";
import BrosweNav from "./ui/browsenav";

// import ReviewWindow from "@/app/ui/reviewwindow";

export const metadata: Metadata = {
  title: "Welcome to Drinkrater",
  description: "Find and rate your next favorite drink"
};

// let isOpen = true;

// export function openReview() {
//   isOpen = true;
// }

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
        <BrosweNav/>
        {children}

      </body>
    </html>
  );
  
}
