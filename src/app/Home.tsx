import Image from "next/image"
import { useRouter } from "next/navigation"

import BallDivider from "@/components/BallDivider"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { NaturalLawOsteopathy } from "@/components/Icons"
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
            Supporting Your Body's Natural Ability to Heal.
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
          <NaturalLawOsteopathy className={style.logo} />

          <p className="mb-2">
            {
              "Welcome to Natural Law Osteopathy, where your health and well-being are my top priorities. I specialize in providing personalized osteopathic care to help you move more freely, feel stronger, and live with greater comfort. Whether you're managing pain, recovering from an injury, or looking to enhance your mobility and overall wellness, I'm here to support you every step of the way."
            }
          </p>
          <p className="mb-2">
            {
              "With a focus on understanding your unique needs, I tailor every treatment to address the root cause of your concerns, not just the symptoms. Using gentle, hands-on techniques, I aim to restore balance and function to your body, promoting natural healing and long-term health."
            }
          </p>
          <p className="mb-2">
            {
              "My mission is to help you achieve your health goals in a calm, professional, and welcoming environment. I look forward to partnering with you on your journey to feeling and living better."
            }
          </p>

          {/* Columns */}
          <div className="grid grid-flow-row md:grid-flow-col gap-5 md:gap-3 w-full my-4">
            <p className="content-center text-center text-xl">
              The body is a dynamic unit.
            </p>
            <BallDivider />
            <p className="content-center text-center text-xl">
              {"The body is self-healing."}
            </p>
            <BallDivider />
            <p className="content-center text-center text-xl">
              Structure and function are interrelated.
            </p>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default Home
