import { Cormorant_Garamond, Josefin_Sans } from "next/font/google"

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: '--font-cormorantGaramond',
  weight: ["400", "500", "600", "700"],
})

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: '--font-josefinSans',
})
