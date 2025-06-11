
import "./globals.css";
import { inter } from "./fonts";
import NavBar from "./components/navbar";
import StoreProvider from "./StoreProvider";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>

      <body>
        <NavBar/>
        <StoreProvider>{children}</StoreProvider>
        <Footer></Footer>
      </body>

    </html>
  );
  
}
