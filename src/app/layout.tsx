
import {noto} from '@/app/components/fonts'
import "./globals.css";
import NavBar from "./components/navbar";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
  
}
