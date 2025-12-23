import { Inter, League_Spartan } from "next/font/google"
import localFont from 'next/font/local'

export const inter = Inter({
    weight: ["400", "500"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})

export const leagueSpartan = League_Spartan({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-league-spartan",
})

export const helvetica = localFont({
    src: '../public/fonts/Helvetica.ttf',
    variable: "--font-helvetica"
})