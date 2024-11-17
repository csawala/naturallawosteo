import Image from "next/image"
import { useRouter } from "next/navigation"

import BallDivider from "@/components/BallDivider"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { Links } from "@/tools/links"
import Hero from "../../public/Hero.jpg"
import style from "./styles/Home.module.css"

const Home = () => {
  const router = useRouter()
  const handleGoToBook = () => router.push(Links.Book)

  return (
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
          <h1 className={style.heroHeader}>
            Restoring Balance, Function, and Well-Being
          </h1>
        </div>

        <div className={style.heroFooterUnderlay}>
          {/* <h2 className={style.heroFooter}>
            Supporting Your Body’s Natural Ability to Heal.
          </h2> */}
          <Button
            className={style.heroFooterCta}
            onClick={handleGoToBook}
            variant="outline"
          >
            Book an Appointment
          </Button>
        </div>
      </div>

      <Card className={style.card}>
        <div className="flex flex-col gap-y-3">
          <h1>NATURAL LAW OSTEOPATHY</h1>

          {/* Columns */}
          <div className="grid grid-flow-row md:grid-flow-col gap-5 md:gap-3 w-full my-4">
            <p className="content-center text-xl">
              The body is a dynamic unit.
            </p>
            <BallDivider />
            <p className="content-center text-xl">
              {"The body is self-healing."}
            </p>
            <BallDivider />
            <p className="content-center text-xl">
              Structure and function are interrelated.
            </p>
          </div>

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
              reprehenderit enim ab. Velit, ab nobis. Ab molestias odit repellat
              assumenda officia vel officiis, iste doloremque doloribus totam
              animi nostrum voluptatum.
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              reprehenderit enim ab. Velit, ab nobis. Ab molestias odit repellat
              assumenda officia vel officiis, iste doloremque doloribus totam
              animi nostrum voluptatum.
            </p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              reprehenderit enim ab. Velit, ab nobis. Ab molestias odit repellat
              assumenda officia vel officiis, iste doloremque doloribus totam
              animi nostrum voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              reprehenderit enim ab. Velit, ab nobis. Ab molestias odit repellat
              assumenda officia vel officiis, iste doloremque doloribus totam
              animi nostrum voluptatum.
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              reprehenderit enim ab. Velit, ab nobis. Ab molestias odit repellat
              assumenda officia vel officiis, iste doloremque doloribus totam
              animi nostrum voluptatum.
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default Home
