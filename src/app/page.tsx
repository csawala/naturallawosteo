"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import Button from "@/components/Button"
import Card from "@/components/Card"
import Hero from "../../public/Hero.jpg"
import globalStyle from "./globalStyle.module.css"
import style from "./styles/Home.module.css"

export default function Home() {
  const router = useRouter()
  const handleGoToAbout = () => router.push("about")

  return (
    <main className={globalStyle.page}>
      <section>
        <div className={style.heroContainer}>
          <Image
            alt="Ashley treating a patient"
            // 1.76 ratio / 0.5666667
            className={style.hero}
            src={Hero}
          />
          <div className={style.heroOverlayFromBottom} />
          <div className={style.heroOverlayFromTop} />
          <div className={style.heroOverlayFromLeft} />
          <div className={style.heroOverlayFromRight} />

          <div className={style.heroHeaderUnderlay}>
            <h1 className={style.heroHeader}>Treating What the Body Needs</h1>
          </div>

          <div className={style.heroFooterUnderlay}>
            <h2 className={style.heroFooter}>You Want I Should Fix You Up?</h2>
            <Button className={style.heroFooterCta} variant="outline">
              Book an Appointment
            </Button>
          </div>
        </div>

        <Card className={style.card}>
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
      </section>
    </main>
  )
}
