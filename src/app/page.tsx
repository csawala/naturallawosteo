"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const handleGoToAbout = () => router.push("about")
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <section>
        <h1>NATURAL LAW OSTEOPATHY</h1>
        <button onClick={handleGoToAbout}>ABOUT</button>
      </section>
    </main>
  )
}
