"use client"

import { useRouter } from "next/navigation"

import Card from "@/components/Card"
import globalStyle from "./globalStyle.module.css"

export default function Home() {
  const router = useRouter()
  const handleGoToAbout = () => router.push("about")
  return (
    <main className={globalStyle.page}>
      <section>
        <Card className="my-5">
          <div className="flex flex-col gap-y-3">
            <h1>NATURAL LAW OSTEOPATHY</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              reprehenderit enim ab. Velit, ab nobis. Ab molestias odit repellat
              assumenda officia vel officiis, iste doloremque doloribus totam
              animi nostrum voluptatum.
            </p>
            <h1>NATURAL LAW OSTEOPATHY</h1>
            <h2>NATURAL LAW OSTEOPATHY</h2>
            <h3>NATURAL LAW OSTEOPATHY</h3>
            <h4>NATURAL LAW OSTEOPATHY</h4>
            <h5>NATURAL LAW OSTEOPATHY</h5>
            <h6>NATURAL LAW OSTEOPATHY</h6>
            <div className="gap-y-3">
              <p className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                reprehenderit enim ab. Velit, ab nobis. Ab molestias odit
                repellat assumenda officia vel officiis, iste doloremque
                doloribus totam animi nostrum voluptatum.
              </p>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                reprehenderit enim ab. Velit, ab nobis. Ab molestias odit
                repellat assumenda officia vel officiis, iste doloremque
                doloribus totam animi nostrum voluptatum.
              </p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                reprehenderit enim ab. Velit, ab nobis. Ab molestias odit
                repellat assumenda officia vel officiis, iste doloremque
                doloribus totam animi nostrum voluptatum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                reprehenderit enim ab. Velit, ab nobis. Ab molestias odit
                repellat assumenda officia vel officiis, iste doloremque
                doloribus totam animi nostrum voluptatum.
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                reprehenderit enim ab. Velit, ab nobis. Ab molestias odit
                repellat assumenda officia vel officiis, iste doloremque
                doloribus totam animi nostrum voluptatum.
              </p>
            </div>
          </div>
        </Card>

        <button className="mt-6" onClick={handleGoToAbout}>
          ABOUT
        </button>
      </section>
    </main>
  )
}
