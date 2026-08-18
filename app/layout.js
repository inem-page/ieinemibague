import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://inemibague.vercel.app"),
  title: {
    default: "INEM Manuel Murillo Toro | Ibagué",
    template: "%s | INEM Ibagué",
  },
  description:
    "Institución Educativa Técnica INEM Manuel Murillo Toro de Ibagué: información institucional, modalidades técnicas, matrículas y contacto.",
  icons: {
    icon: "/images/logo-inem.png",
  },
  openGraph: {
    title: "INEM Manuel Murillo Toro | Ibagué",
    description:
      "Institución Educativa Técnica INEM Manuel Murillo Toro de Ibagué — formación técnica de calidad desde 1969.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${inter.variable} font-body bg-white text-slate-800 antialiased`}
      >
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[999] focus:rounded-br-lg focus:bg-inem-navy focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
