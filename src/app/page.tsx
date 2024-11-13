"use client"

import Home from "@/app/Home"
import globalStyle from "@/app/globalStyle.module.css"

export default function Main() {
  return (
    <main className={globalStyle.page}>
      <Home />
    </main>
  )
}
