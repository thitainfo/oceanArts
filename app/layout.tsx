import type { Metadata } from "next"
import { Archivo, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "OceanArts — Creative Design Studio",
    template: "%s | OceanArts",
  },
  description:
    "Expert vector artwork, logo design, embroidery digitizing & web solutions. Serving businesses across USA, Canada, UK & Australia with a 24/7 dedicated team since 2014.",
  keywords: [
    "vector artwork",
    "logo design",
    "embroidery digitizing",
    "graphic design",
    "Houston TX",
    "vector tracing",
    "product mockup",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
