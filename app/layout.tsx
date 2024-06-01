import type { Metadata } from "next";
import { Inter, Abhaya_Libre, Playfair_Display, Poppins, Lusitana, Roboto, Montserrat, Lato} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const abhaya = Abhaya_Libre({ subsets: ["latin"], weight: ['400','500','600','700','800'] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ['400','500','600','700','800'],style: ['normal', 'italic'], });
const poppins = Poppins({ subsets: ["latin"], weight: ['400','500','600','700','800'],style: ['normal', 'italic'], });
const lusitana = Lusitana({ subsets: ["latin"], weight: ['400','700'],style: ['normal'] });
const roboto = Roboto({ subsets: ["latin"], weight: ['300','400','500','700'],style: ['normal', 'italic'], });
const montserrat = Montserrat({ subsets: ["latin"], weight: ['400','500','600','700','800'],style: ['normal', 'italic'], });
const lato = Lato({ subsets: ["latin"], weight: ['400','700'],style: ['normal', 'italic'], });
export const metadata: Metadata = {
  title: "Mirch Media",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${abhaya.className} ${playfair.className} ${poppins.className} ${lusitana.className} ${roboto.className} ${lato.className} ${montserrat.className}`}>
        <Navbar />
        {children}</body>
    </html>
  );
}