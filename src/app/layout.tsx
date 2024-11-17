import type { Metadata } from "next"

import Banner from "@/components/Banner"
import Header from "@/components/Header"
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
        <div className="hidden sm:block">
          <Header />
        </div>
        <Banner className="mt-4" variant="yellow">
          <p className="mb-1">
            {
              "Hello! I’ll be on maternity leave for a few months, taking some time to welcome a new little one. During this period, I won’t be available for appointments, but I’ll be back soon and look forward to reconnecting with you. For temporary care options or to schedule a future appointment, feel free to reach out."
            }
          </p>
          <p className="text-center">
            {"Thank you for your understanding and support!"}
          </p>
        </Banner>

        <main className={globalStyle.main}>{children}</main>

        <div className="block sm:hidden">
          <Header />
        </div>
      </body>
    </html>
  )
}
