"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const handleGoToAbout = () => router.push("about")
  return (
    <main className="flex w-full flex-col items-center justify-between p-24">
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
