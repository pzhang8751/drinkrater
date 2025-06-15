
import "./globals.css";
import { inter } from "./fonts";
import NavBar from "./components/navbar";
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
        {children}
        <Footer></Footer>
      </body>

    </html>
  );
  
}
