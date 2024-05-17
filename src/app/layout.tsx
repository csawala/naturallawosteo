import Header from "@/components/Header"
import type { Metadata } from "next"

import { cormorantGaramond, josefinSans } from "./fonts"
import globalStyle from "./globalStyle.module.css"
import "./globals.css"

export const metadata: Metadata = {
  // description: "Something something",
  title: "Natural Law Osteopathy",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${cormorantGaramond.variable} ${josefinSans.variable} ${globalStyle.root}`}
      lang="en"
    >
      <body className={globalStyle.body}>
        <Header />
        {children}
      </body>
    </html>
  )
}
