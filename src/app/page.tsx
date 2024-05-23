"use client"

import { useRouter } from "next/navigation"

import globalStyle from "./globalStyle.module.css"

export default function Home() {
  const router = useRouter()
  const handleGoToAbout = () => router.push("about")
  return (
    <main className={globalStyle.page}>
      <section>
        <h1>NATURAL LAW OSTEOPATHY</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          reprehenderit enim ab. Velit, ab nobis. Ab molestias odit repellat
          assumenda officia vel officiis, iste doloremque doloribus totam animi
          nostrum voluptatum.
        </p>
        <button onClick={handleGoToAbout}>ABOUT</button>
      </section>
    </main>
  )
}
